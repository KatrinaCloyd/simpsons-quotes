import React from 'react'

export default function Quote({ name, image, quote }) {
    return (
        <>
            <img src={image} alt={name} />
            <h2>
                {name}
            </h2>
            <h2>
                {quote}
            </h2>
        </>
    )
}
