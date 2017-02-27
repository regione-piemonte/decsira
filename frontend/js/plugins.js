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
        MousePositionPlugin: require('../MapStore2/web/client/plugins/MousePosition'),
        UndoPlugin: require('../MapStore2/web/client/plugins/History'),
        RedoPlugin: require('../MapStore2/web/client/plugins/History'),
        SnapshotPlugin: require('../MapStore2/web/client/plugins/Snapshot'),
        ShapeFilePlugin: require('../MapStore2/web/client/plugins/ShapeFile'),
        MetadataExplorerPlugin: require('../MapStore2/web/client/plugins/MetadataExplorer'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        TOCPlugin: require('./plugins/SIRATOC'),
        CatalogPlugin: require('./plugins/SiraCatalog'),
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
        HelpPlugin: require('../MapStore2/web/client/plugins/Help'),
        SharePlugin: require('../MapStore2/web/client/plugins/Share'),
        InfoPlugin: require('./plugins/InfoPlugin')
    },
    requires: {}
};
