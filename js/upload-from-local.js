'use strict'

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
    const elEditorSection = document.querySelector ('.meme-editor-page')
    elEditorSection.classList.remove("hide")

    const myElement = document.getElementById('myElement');
    myElement.style.display = 'none'
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()

    reader.onload = ev => {
        let img = new Image()
        img.src = ev.target.result
        img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    // Adjust the canvas to the new image size
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width

    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText('your text here',200,50)
    // createMemeElemnt(200,50)
    gMeme.selectedLineIdx = 0
}




