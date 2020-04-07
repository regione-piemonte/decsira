const React = require('react');

const GridCellNumber = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },
    contextTypes: {
        locale: React.PropTypes.string
    },
    render() {
        const locale = this.props.params.colDef.locale || this.context.locale || 'it-IT';
        const value = this.props.params.value !== null && this.props.params.value !== undefined ? new Intl.NumberFormat(locale).format(this.props.params.value) : this.props.params.value;
        return <span>{value}</span>;
    }
});

module.exports = GridCellNumber;
