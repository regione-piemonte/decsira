const SET_BOX = 'SET_BOX';

function setMosaicTile(name,icon, objectNumber, tematicViewNumber) {
    return {
        type: SET_BOX,
        icon: icon,
        name: name,
        objectNumber: objectNumber,
        tematicViewNumber: tematicViewNumber
    };
}

module.exports = {
    SET_BOX,
    setMosaicTile
};