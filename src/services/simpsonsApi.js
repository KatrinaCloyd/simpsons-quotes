export default async function simpsonsApi() {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const parsedQuote = await res.json();
    return {
        name: parsedQuote[0].character,
        image: parsedQuote[0].image,
        quote: parsedQuote[0].quote,
    }
}
