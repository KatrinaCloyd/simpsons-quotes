import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ onClick, quote }) {
    if (!quote.name) {
        return (
            <button onClick={onClick}>
                Get a Quote!
            </button>)
    }
    else {
        return (
            <button onClick={onClick}>
                Get a New Quote!
            </button>)
    }
}

Load.propTypes = {
    quote: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func.isRequired
}
