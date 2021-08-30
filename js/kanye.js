const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))

}
const displayQuotes = data => {
    const loadQuote = document.getElementById('quote');
    loadQuote.innerText = data.quote;
}
