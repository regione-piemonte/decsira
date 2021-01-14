import React from 'react';
import ReactDOM from 'react-dom';

export const reactCellRendererFactory = (reactComponent) => {
    return (params) => {
        params.eParentOfValue.addElementAttachedListener( (eCell) => {
            ReactDOM.render(React.createElement(reactComponent, { params: params }), eCell);
            params.api.addVirtualRowListener('virtualRowRemoved', params.rowIndex, () => {
                ReactDOM.unmountComponentAtNode(eCell);
            });
        });
        return null;
    };
};
