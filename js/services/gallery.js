'use strict'

const DB_KEYS = 'DB_keys'
let gKeys = {
    funny: 15,
    president: 15,
    baby: 15,
    happy: 15,
    scared: 15,
}

function renderKeyWords() {
    const words = document.getElementById('keywords')
    words.innerHTML =
        `<option class="funny" data-trans="funny">funny<option>
<option class="president" data-trans="president">president<option>
<option class="baby" data-trans="baby">baby<option>
<option class="happy" data-trans="happy">happy<option>
<option class="scared" data-trans="scared">scared<option>`

    const elFunny = document.querySelector('.funny')
    elFunny.style.fontSize = gKeys.funny + 'px'

    const elPresident = document.querySelector('.president')
    elPresident.style.fontSize = gKeys.president + 'px'

    const elBaby = document.querySelector('.baby')
    elBaby.style.fontSize = gKeys.baby + 'px'

    const elHappy = document.querySelector('.happy')
    elHappy.style.fontSize = gKeys.happy + 'px'

    const elScared = document.querySelector('.scared')
    elScared.style.fontSize = gKeys.scared + 'px'

}

function renderGallery() {
    // this function brings from the service an array of the images
    const images = getImages()
    // if there is a filter option, we will filter the array here,,
    // image = images.filter(i=>i.tags.includes(filterbY))
    const elImgs = document.querySelector('.mems')
    const strHTML = images.map(img => {
        return `
        <img src="${img.url}" alt="meme" id="${img.id}" onClick="renderCanvasImg(this)" class="img">
        `
    })
    elImgs.innerHTML = strHTML.join('')
}

function saveKeys() {
    saveToStorage(DB_KEYS, gKeys)
}

function initKeys() {
    let loadedKeys = loadFromStorage(DB_KEYS)
    if (!loadedKeys || loadedKeys === null) return
    gKeys = loadedKeys
    console.log(loadedKeys)
    renderKeyWords()
}

