const TREE_DATA_LOADED = 'TREE_DATA_LOADED';
const TREE_DATA_LOADING = 'TREE_DATA_LOADING';

function treeDataLoading(status) {
    return {
        type: TREE_DATA_LOADING,
        loading: status
    };
}

function treeDataLoaded(treeData) {
    return {
        type: TREE_DATA_LOADED,
        treeData: treeData
    };
}

module.exports = {
    TREE_DATA_LOADING,
    TREE_DATA_LOADED,
    treeDataLoading,
    treeDataLoaded
};
