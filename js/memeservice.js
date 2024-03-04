'use strict'
var elCanvasContainer = document.querySelector(".canvas-container")

var gMeme = {
    selectedLineIdx: 0,
    lines: []
}

function drawText(text, x, y, id) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gMeme.lines.push({
        id: gMeme.lines.length,
        txt: text,
        color: gCtx.fillStyle,
        strokeColor: gCtx.strokeStyle,
        size: gCtx.font,
        x: x,
        y: y,
        align: gCtx.textAlign,
        isDrage: false,
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

function selectedMeme(id) {
    gMeme.selectedLineIdx = id
}

function removeLine(idx) {
    if (gMeme.lines.length === 1) return
    const lineIdx = gMeme.lines.findIndex((line) => line.id === idx)
    gMeme.lines.splice(lineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function changeLine(value) {
    gMeme.selectedLineIdx = value + 1
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function addLine(txt) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = txt.value
    gElCanvas.height = (saveImg.naturalHeight / saveImg.naturalWidth) * gElCanvas.width
}

function changeFontSize(value) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)
    const newFontSize = currentFontSize + value
    selectedLine.size = newFontSize + 'px' + ' ' + font
}

function setFont(value) {
    font = value.value
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)
    selectedLine.size = currentFontSize + 'px' + ' ' + value.value
}


function clearInput() {
    const elTextInput = document.querySelector('.meme-text-input')
    elTextInput.value = ''
}








