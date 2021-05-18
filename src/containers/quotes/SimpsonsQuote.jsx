import React, { useState } from 'react'
import Load from '../../components/quote/Load'
import Quote from '../../components/quote/Quote'
import simpsonsApi from '../../services/simpsonsApi';

export default function SimpsonsQuote() {
    const [quote, updateQuote] = useState({});

    const handleFetchQuoteClick = async () => {
        const newQuote = await simpsonsApi();
        // console.log(newQuote);
        updateQuote(newQuote);
    }

    return (
        <>
            <Load onClick={handleFetchQuoteClick} />
            <br />
            <Quote {...quote} />
        </>
    )
}
