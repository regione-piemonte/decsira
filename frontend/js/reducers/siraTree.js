const {
    TREE_LOADED, TREE_LOAD_ERROR, CLOSE_TREE
} = require('../actions/siraTree');

const assign = require('object-assign');

const initialState = {
    card: undefined,
    show: 'none'
};

function siraTree(state = initialState, action) {
    switch (action.type) {
    case TREE_LOADED: {
        return assign({}, state, {
            card: action.card,
            show: action.show
        });
    }
    case TREE_LOAD_ERROR: {
        return assign({}, state, {
            loadingTreeError: action.error,
            show: 'none'
        });
    }
    case CLOSE_TREE: {
        return assign({}, state, {
            show: 'none'
        });
    }
    default:
        return state;
    }
}

module.exports = siraTree;
