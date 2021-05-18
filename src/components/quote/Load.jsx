import React from 'react'

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
