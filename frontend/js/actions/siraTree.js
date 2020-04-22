const TemplateUtils = require('../utils/TemplateUtils');

const TREE_LOADED = 'TREE_LOADED';
const TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
const OPEN_TREE = 'OPEN_TREE';
const CLOSE_TREE = 'CLOSE_TREE';

function getChildData(id, oggetto, keyCount) {
    let childCount = 0;
    let title = '';
    switch (id) {
        case '1':
            title = 'Codice Scarico: ' + TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:codiceOggetto/text()"}, oggetto) +
                    ' - Numero provvedimento: ' + TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:estremiAtto/text()"}, oggetto);
            break;
        case '8':
        case '15':
            title = 'Codice Sira: ' + TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:codiceSira/text()"}, oggetto) +
                    ' - Numero provvedimento: ' + TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:estremiAtto/text()"}, oggetto);
            break;
        default:
            break;
    }

    let nomeWfs = TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:nomeWFS/text()"}, oggetto);
    let idOggetto = TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:idOggetto/text()"}, oggetto);

    return {
        title: title,
        key: keyCount + '-' + (childCount++),
        linkToDetail: {
            featureType: nomeWfs.split("#")[0],
            xpath: null,
            cqlFilter: nomeWfs.split("#")[1] + "='" + idOggetto + "'"
        }
    };
}

function loadDataForTree(dataDesc, xmlData) {
    let keyCount = 0;
    // Definisco la radice del tree, il dato di partenza
    let treeDataWithRoot = [{
        title: dataDesc,
        key: '' + keyCount++,
        linkToDetail: {
            featureType: 'stabilimento',
            featureId: 'codice_sira.' + TemplateUtils.getValue(xmlData, "/wfs:FeatureCollection/wfs:member/decsiraogc_stabilimenti:Stabilimento/decsiraogc_stabilimenti:codiceSira/text()")
        }
    }];

    let treeDataFlat = [];
    const oggetti = TemplateUtils.getList(xmlData, "/wfs:FeatureCollection/wfs:member/decsiraogc_stabilimenti:Stabilimento/decsiraogc_stabilimenti:oggettoAssociato");
    oggetti.forEach(oggetto => {
        let id = TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:idTipo/text()"}, oggetto);
        const data = {
            title: TemplateUtils.getElement({xpath: "decsiraogc_stabilimenti:OggettoAssociato/decsiraogc_stabilimenti:desTipo/text()"}, oggetto),
            id: id,
            key: '' + keyCount,
            children: [getChildData(id, oggetto, keyCount++)]
        };
        treeDataFlat.push(data);
    });

    // Group objects with the same ID
    let treeData = treeDataFlat.reduce((tmpArray, obj1) => {
        const found = tmpArray.find(obj2 => obj2.id === obj1.id);
        if (!found) {
            // not found, so need to add entire object
            tmpArray.push({title: obj1.title, id: obj1.id, key: obj1.key, children: obj1.children});
        } else {
            // if found, that means object exists, so just concat new children to found.children.
            found.children = found.children.concat(obj1.children);
        }
        return tmpArray;
    }, []);

    // Aggiungo il treeDat alla radice del tree
    treeDataWithRoot[0].children = treeData;

    console.log(treeDataWithRoot);
    return treeDataWithRoot;
}

function configureTree(xmlData) {
    let treeData = [];
    let title = '';
    let subtitle = '';
    let show = 'none';
    if (!TemplateUtils.isTreeDisabled(xmlData)) {
        title = 'STABILIMENTI SOGGETTI AD AUTORIZZAZIONE AMBIENTALE';
        subtitle = 'Denominazione stabilimento: ' + TemplateUtils.getValue(xmlData, "/wfs:FeatureCollection/wfs:member/decsiraogc_stabilimenti:Stabilimento/decsiraogc_stabilimenti:nome/text()")
            + ' ' + 'Comune: ' + TemplateUtils.getValue(xmlData, "/wfs:FeatureCollection/wfs:member/decsiraogc_stabilimenti:Stabilimento/decsiraogc_stabilimenti:nomeComune/text()");
        show = 'block';
        treeData = loadDataForTree(subtitle, xmlData);
    }
    return {
        type: TREE_LOADED,
        show,
        treeData,
        title,
        subtitle
    };
}

function treeLoadError(e) {
    return {
        type: TREE_LOAD_ERROR,
        error: e
    };
}

function openTree() {
    return {
        type: OPEN_TREE
    };
}

function closeTree() {
    return {
        type: CLOSE_TREE
    };
}

module.exports = {
    TREE_LOADED,
    TREE_LOAD_ERROR,
    CLOSE_TREE,
    OPEN_TREE,
    configureTree,
    openTree,
    closeTree,
    treeLoadError
};
