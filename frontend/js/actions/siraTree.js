const TREE_LOADED = 'TREE_LOADED';
const TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
const CLOSE_TREE = 'CLOSE_TREE';

function loadTree(treeData) {
    return {
        type: TREE_LOADED,
        treeData
    };
}

function treeLoadError(e) {
    return {
        type: TREE_LOAD_ERROR,
        error: e
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
    loadTree,
    closeTree,
    treeLoadError
};
