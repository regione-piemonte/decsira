const {createSelector} = require('reselect');
const assign = require('object-assign');

const grid = (state) => state && state.grid;
const featureGrid = (state) => state && state.siradec && state.siradec.configOggetti[state.siradec.activeFeatureType].featuregrid || {};

const gridSelector = createSelector([grid, featureGrid],
     (gridS, featureGridS) => ({
    grid: assign({}, gridS, {featuregrid: featureGridS})
}));


module.exports = {
    gridSelector
};

