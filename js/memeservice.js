'use strict'
var elCanvasContainer = document.querySelector(".canvas-container")
var gMeme = {
    // selectedImgId: 5,
    selectedLineIdx: 0,
    lines: []
}

function getMeme() {
    return gMeme
}

function drawText(text, x, y, id) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.onclick = () => (selectedMeme(gCtx))
    gMeme.lines.push({
        id: gMeme.lines.length,
        txt: text,
        color: gCtx.fillStyle,
        size: gCtx.font,
        x: x,
        y: y,
        isDrage : false,
    })
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gElCanvas.addEventListener('click', function (event) {
        handleClick(event, text, x, y, id);
    })
}

function handleClick(event, text, x, y, id) {

    if (event.offsetX >= x && event.offsetX <= x + gCtx.measureText(text).width &&
        event.offsetY >= y - parseInt(gCtx.font) / 2 && event.offsetY <= y + parseInt(gCtx.font) / 2) {
        selectedMeme(id)
    }
}

function selectedMeme(value) {
    gMeme.selectedLineIdx = value
    console.log('this:', value)
    // value.style.borderStyle = "solid"
    // value.style.borderWidth = "1px"
    // value.style.borderColor = "black"
}

function onChangeLine(value) {
    gMeme.selectedLineIdx = value + 1
    if (gMeme.selectedLineIdx === null || !gMeme.selectedLineIdx)
        gMeme.selectedLineIdx = 0
    console.log('this', value)
}

function onAddTxt(txt) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = txt.value
    console.log(gMeme.lines[gMeme.selectedLineIdx])

    gElCanvas.height = (saveImg.naturalHeight / saveImg.naturalWidth) * gElCanvas.width

    // // Draw the img on the canvas
    gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.font = '45px Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'
        gCtx.onclick = () => (selectedMeme(gCtx))
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gElCanvas.addEventListener('click', function (event) {
            handleClick(event, line.text, line.x, line.y, line.id);
        })
    })
    return txt.value
}

function onRemoveline(lineCut) {
    removeLine(lineCut)
    gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.font = '45px Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'
        gCtx.onclick = () => (selectedMeme(gCtx))
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gElCanvas.addEventListener('click', function (event) {
            handleClick(event, line.text, line.x, line.y, line.id);
        })
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function removeLine(idx) {
    const lineIdx = gMeme.lines.findIndex((line) => line.id === idx)
    gMeme.lines.splice(lineIdx, 1)
}

function renderCanvasImg(img) {
    renderImg(img)
    const elEditorSection = document.querySelector('.meme-editor-page')
    elEditorSection.classList.remove("hide")

    const myElement = document.getElementById('myElement')
    myElement.style.display = 'none'
}

function onFontSize(value) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)
    console.log(currentFontSize)
    const newFontSize = currentFontSize + value
    selectedLine.size = newFontSize + 'px'

    gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.font = line.size + ' ' + 'Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'
        gCtx.onclick = () => (selectedMeme(gCtx))
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gElCanvas.addEventListener('click', function (event) {
            handleClick(event, line.text, line.x, line.y, line.id)
        })

    })
}

function onSetFont(value) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)

    gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.font = line.size + ' ' + value.value
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'
        gCtx.onclick = () => (selectedMeme(gCtx))
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gElCanvas.addEventListener('click', function (event) {
            handleClick(event, line.text, line.x, line.y, line.id)
        })
        
    })
}

function setColors() {
    const elColor = document.querySelector('[name="colorTxt"]')

    gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = elColor.value
        gCtx.font = '45px Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'
        gCtx.onclick = () => (selectedMeme(gCtx))
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gElCanvas.addEventListener('click', function (event) {
            handleClick(event, line.text, line.x, line.y, line.id);
        })
       
    })
}






