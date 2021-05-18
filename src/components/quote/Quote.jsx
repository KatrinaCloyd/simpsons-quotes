import React from 'react'
import style from '../app/app.css';
import PropTypes from 'prop-types';

export default function Quote({ name, image, quote }) {
    return (
        <div className={style.quote}>
            <img src={image} alt={name} />
            <h2>
                {name}
            </h2>
            <h3>
                {quote}
            </h3>
        </ div>
    )
}

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}

