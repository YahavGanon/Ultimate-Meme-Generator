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


function drawText(text, x, y) {
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
        y: y
    })
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gElCanvas.addEventListener('click', function (event) {
        handleClick(event, text, x, y);
    });
}

function handleClick(event, text, x, y) {

    if (event.offsetX >= x && event.offsetX <= x + gCtx.measureText(text).width &&
        event.offsetY >= y - parseInt(gCtx.font) / 2 && event.offsetY <= y + parseInt(gCtx.font) / 2) {
        selectedMeme(text)
    }
}

function selectedMeme(value) {
    // gMeme.selectedLineIdx = value
    console.log('this:', value)
    // value.style.borderStyle = "solid"
    // value.style.borderWidth = "1px"
    // value.style.borderColor = "black"
}

function onAddTxt(txt) {
    // if (gMeme.lines.length === 1) {
    //     gMeme.selectedLineIdx = 0
    // }
    // const selectParagraph = document.getElementById(gMeme.lines[0].txt)
    // console.log(selectParagraph)
    // console.log(gMeme.lines)
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    console.log('dsds', gMeme.lines)
    // console.log(selectedLine)
    // console.log(gMeme.selectedLineIdx)
    // selectedLine.txt = txt.value
    // const selectPargraph = document.getElementById(gMeme.lines)
    // console.log('select', selectParagraph)
    // if (selectPargraph === null) {

    // }
    // selectedLine.txt = txt.value
    // return txt.value
}

// function createMemeElemnt(x, y) {
//     const pargraph = document.createElement('p')
//     pargraph.style.color = 'white'
//     pargraph.style.position = 'absolute'
//     pargraph.style.left = `${x}px`
//     pargraph.style.top = `${y}px`
//     pargraph.textContent = 'Your text here'
//     pargraph.style.margin = '0'
//     pargraph.style.padding = '0'
//     pargraph.onclick = () => (selectedMeme(pargraph))
//     pargraph.id = gMeme.lines.length + 1
//     // console.log(gMeme.lines.length)
//     gMeme.lines.push({
//         txt: pargraph.textContent,
//         color: pargraph.style.color,
//         size: pargraph.style.fontSize
//     })
//     elCanvasContainer.appendChild(pargraph)
// }


function onRemoveline(lineCut) {
    removeLine(lineCut)
}

function removeLine(idx) {
    const lineIdx = gMeme.lines.findIndex((line) => line.id === idx)
    gMeme.lines.splice(lineIdx, 1)
    // console.log(gMeme.lines.length)

}

function renderCanvasImg(img) {
    renderImg(img)
    const elEditorSection = document.querySelector('.meme-editor-page')
    elEditorSection.classList.remove("hide")

    const myElement = document.getElementById('myElement');
    myElement.style.display = 'none'
}

function fontSize(currLine) {
    if (gMeme.lines.length === 1) {
        gMeme.selectedLineIdx = 1
    }
    const selectPargraph = document.getElementById(gMeme.selectedLineIdx)
    // console.log(selectPargraph)

}





