'use strict'
var elCanvasContainer = document.querySelector(".canvas-container")

var gMeme = {
    // selectedImgId: 5,
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
}

function removeLine(idx) {
    const lineIdx = gMeme.lines.findIndex((line) => line.id === idx)
    gMeme.lines.splice(lineIdx, 1)
}







