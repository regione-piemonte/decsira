const {
    TREE_LOADED, TREE_LOAD_ERROR, OPEN_TREE, CLOSE_TREE
} = require('../actions/siraTree');

const assign = require('object-assign');

const initialState = {
    treeData: [],
    defaultExpandedKeys: [],
    title: '',
    subtitle: '',
    show: 'none'
};

function siraTree(state = initialState, action) {
    switch (action.type) {
        case TREE_LOADED: {
            return assign({}, state, {
                treeData: action.treeData,
                title: action.title,
                subtitle: action.subtitle,
                defaultExpandedKeys: action.defaultExpandedKeys,
                show: 'none'
            });
        }
        case TREE_LOAD_ERROR: {
            return assign({}, state, {
                loadingTreeError: action.error,
                show: 'none'
            });
        }
        case OPEN_TREE: {
            return assign({}, state, {
                show: 'block'
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
