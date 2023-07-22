const btn = document.querySelector('.img-wrapper')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const img = document.querySelector('img')
const imgWrapper = document.querySelector('.img-wrapper')

const characters = {
    Charlie: './media/Charlie.png',
    Dennis: './media/Dennis.png',
    Frank: './media/Frank.png',
    Dee: './media/Dee.png',
    Mac: './media/Mac.png',
}

const corsProxy = 'https://cors-anywhere.herokuapp.com/'
const getQuote = async () => {
    imgWrapper.classList.add('fade-out')    
    const res = await fetch(corsProxy + 'https://sunnyquotes.net/q.php?random')
     const quoteRes = await res.json()
    quote.innerHTML = `"${quoteRes.sqQuote}"`
    author.innerHTML = '- ' + quoteRes.sqWho
    const who =  quoteRes.sqWho.split(' ')[0]
    characters[who] ? img.src = characters[who] : img.src = './media/theGang.png'
    imgWrapper.classList.remove('fade-out')    
    }

btn.addEventListener('click', getQuote)
