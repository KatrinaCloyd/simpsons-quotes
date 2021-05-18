import React, { useState } from 'react'
import Load from '../../components/quote/Load'
import Logo from '../../components/quote/Logo';
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
            <Logo />
            <Load onClick={handleFetchQuoteClick} quote={quote} />
            <br />
            <Quote {...quote} />
        </>
    )
}
