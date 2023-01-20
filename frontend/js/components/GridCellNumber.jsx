const PropTypes = require('prop-types');
const React = require('react');

class GridCellNumber extends React.Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    static contextTypes = {
        locale: PropTypes.string
    };

    render() {
        const locale = this.props.params.colDef.locale || this.context.locale || 'it-IT';
        const value = this.props.params.value !== null && this.props.params.value !== undefined ? new Intl.NumberFormat(locale, {maximumFractionDigits: 20}).format(this.props.params.value) : this.props.params.value;
        return <span>{value}</span>;
    }
}

module.exports = GridCellNumber;
