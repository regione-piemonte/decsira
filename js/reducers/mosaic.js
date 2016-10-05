const {TILES_LOADED, TILES_LOAD_ERROR} = require('../actions/mosaictile');

/*const initialState = {
    tiles: [
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
           tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
           name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        },
        {
            name: "ddddddddddd",
            icon: "url(assets/application/conoscenze_ambientali/css/images/aria.png)",
            tematicViewNumber: 2,
            objectNumber: 3
        }
]};*/


function mosaic(state = {tiles:[]}, action) {
    switch (action.type) {
    case TILES_LOADED:{
    	return {tiles: action.tiles, error: null}
    	break;
    }
    case TILES_LOAD_ERROR:{
    	return {tiles: [], error: action.error}
    	break;
    }
        default:
        return state;
    }
}

module.exports = mosaic;