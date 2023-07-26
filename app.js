const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const characters = document.querySelectorAll('.img-wrapper')
const imgWrapper = document.querySelector('.img-container')



const charactersCache = {
    Charlie: charlie,
    Dennis: dennis,
    Frank: frank,
    Dee: dee,
    Mac: mac
}

const sendToBackground = () => {
    for (let character of characters){
        character.classList.add('background-character')
    }
} 

const sendToForeground = character => {
    sendToBackground()
    character.classList.add('fade-in')
    character.classList.remove('background-character')
}

const corsProxy = 'https://cors-proxy-awesome-105b58c47564.herokuapp.com/'

const getQuote = async () => {
    const res = await fetch(corsProxy + 'https://sunnyquotes.net/q.php?random')
    const quoteRes = await res.json()
    const who =  quoteRes.sqWho.split(' ')[0]
    if (charactersCache[who]) {
        quote.innerHTML = `"${quoteRes.sqQuote}"`
        author.innerHTML = '- ' + quoteRes.sqWho
        sendToForeground(charactersCache[who])
        } 
    else {
        getQuote()
    }
    }


for (let character of characters){
    character.addEventListener('click', getQuote)
}


