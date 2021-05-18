import React from 'react'
import style from '../app/app.css';

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
