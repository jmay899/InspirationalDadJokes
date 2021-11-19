const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const quoteButton = document.getElementById('quoteBtn')

const apiURL = "https://icanhazdadjoke.com/"

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

async function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }
    const res = await fetch(apiURL,config)
    const data = await res.json()
    quoteElement.innerHTML = data.joke

    const dadNames = ["Bill","Dan","Dave","Doug","Ed","Frank","Greg","Jeff","Jim","Larry","Martin","Mike","Pete","Ray","Richard","Steve","Tom","Tim"]
    authorElement.innerHTML = dadNames[Math.floor(Math.random() * dadNames.length)]
    
    document.body.style.backgroundImage = 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')';
}