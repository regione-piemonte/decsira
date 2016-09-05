/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        BackgroundSwitcherPlugin: require('../MapStore2/web/client/plugins/BackgroundSwitcher'),
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure'),
        MeasureResultsPlugin: require('../MapStore2/web/client/plugins/MeasureResults'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
        SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        SettingsPlugin: require('../MapStore2/web/client/plugins/Settings'),
        InfoPlugin: require('./plugins/InfoPlugin'),
        TopologyPlugin: require('./plugins/TopologyPlugin')
    },
    requires: {}
};
