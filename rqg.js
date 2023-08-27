const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const url = 'https://api.quotable.io/random';

const generateQuote = async() => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = `~ ${quoteAuthor}`;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = 'An error occured, try again'
        authorEl.innerText = 'An error occured, try again'
    }
}

btnEl.addEventListener('click', generateQuote);