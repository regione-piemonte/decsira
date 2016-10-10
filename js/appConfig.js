/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    pages: [
        { path: "/:profile", component: require('./containers/Sira')},
        { path: "/map/:profile", component: require('./containers/Sira')}
        ],
    pluginsDef: require('./plugins.js'),
    initialState: {
        defaultState: {
            controls: {
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                }
            },
            siracatalog: {
            nodes: [
                    {
                        type: "root",
                        id: "1",
                        "expanded": true,
                        name: "derivazione",
                        title: "Derivazione",
                        nodes: ['2', '3', '7']
                    },
                    {
                        type: "node",
                        id: "2",
                        title: "Aua"
                    },
                    {
                        type: "node",
                        id: "3",
                        title: "Aua-Aua"
                    },
                    {
                        type: "root",
                        id: "4",
                        name: "cat 2",
                        title: "Categoria 2",
                        nodes: ['5', '6']
                    },
                    {
                        type: "node",
                        id: "5",
                        name: "Sotto-cat 1",
                        title: "Sotto-Cat 1",
                        nodes: ['2', '7']
                    },
                    {
                        type: "node",
                        "expanded": false,
                        id: "6",
                        name: "Sotto-cat 2",
                        title: "Sotto-Cat 2",
                        nodes: ['8']
                    },
                    {
                        type: "node",
                        id: "7",
                        title: "Aua-Aua-Aua"
                    },
                    {
                        type: "node",
                        id: "8",
                        name: "Sotto-Sotto-cat 3",
                        title: "Sotto-Sotto-Cat 3",
                        nodes: ['3', '2']
                    },
                    {
                        type: "view",
                        id: "9",
                        name: "vista",
                        title: "Vista Tematica",
                        nodes: ['7', '2', '3']
                    },
                    {
                        type: "view",
                        id: "10",
                        name: "Impianti di recupero energia e materia",
                        title: "Impianti di recupero energia e materia",
                        nodes: ['2', '3']
                    }
                ]}
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    storeOpts: {}
};
