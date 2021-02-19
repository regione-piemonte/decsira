const INDICA_FORM_CLOSED = 'INDICA_FORM_CLOSED';
const INDICA_FORM_RESET = 'INDICA_FORM_RESET';

function indicaFormClosed(indicaform) {
    return {
        type: INDICA_FORM_CLOSED,
        indicaform: indicaform
    };
}

function indicaFormReset() {
    return {
        type: INDICA_FORM_RESET
    };
}

module.exports = {
    INDICA_FORM_CLOSED,
    INDICA_FORM_RESET,
    indicaFormClosed,
    indicaFormReset
};
