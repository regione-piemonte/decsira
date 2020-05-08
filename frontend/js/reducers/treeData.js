const { TREE_DATA_LOADING, TREE_DATA_LOADED } = require('../actions/treeData');
const assign = require('object-assign');

const initialState = {
    loading: false,
    treeData: undefined
};

function siraTree(state = initialState, action) {
    switch (action.type) {
        case TREE_DATA_LOADING: {
            return assign({}, state, {
                loading: action.loading
            });
        }
        case TREE_DATA_LOADED: {
            return assign({}, state, {
                treeData: action.treeData,
                loading: false
            });
        }
        default:
            return state;
    }
}

module.exports = siraTree;
