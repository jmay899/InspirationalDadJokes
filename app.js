const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const quoteButton = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

async function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://api.themotivate365.com/stoic-quote')
    const data = await res.json()
    
    const { quote, author } = data.results

    quoteElement.innerHTML = quote
    authorElement.innerHTML = author

}