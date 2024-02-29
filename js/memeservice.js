'use strict'
const elCanvasContainer = document.querySelector(".canvas-container")
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

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onAddTxt(txt) {
    // const elTxtInput = document.querySelector('[name="text-input"]')
    // let selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    // console.log('select', selectedLine)
    if (gMeme.lines.length === 1) {
        gMeme.selectedLineIdx = 1
    }
    const selectPargraph = document.getElementById(`line-${gMeme.selectedLineIdx}`)
    console.log('select', selectPargraph)
    if (selectPargraph === null) {

        // selectedLine = gMeme.lines[gMeme.selectedLineIdx = 1]
    }
    selectPargraph.textContent = txt.value
    // selectedLine.txt = txt.value
    return txt.value
}

function createMemeElemnt(x, y) {
    const pargraph = document.createElement('p')
    pargraph.style.color = 'white'
    pargraph.style.position = 'absolute'
    pargraph.style.left = `${x}px`
    pargraph.style.top = `${y}px`
    pargraph.textContent = 'Your text here'
    pargraph.style.margin = '0'
    pargraph.style.padding = '0'
    pargraph.onclick = () => (selectedMeme(pargraph))
    pargraph.id = `line-${gMeme.lines.length + 1}`
    // console.log(gMeme.lines.length)
    gMeme.lines.push({
        txt: pargraph.textContent,
        color: pargraph.style.color,
        size: pargraph.style.fontSize
    })
    elCanvasContainer.appendChild(pargraph)
}

function selectedMeme(value) {
    // const pargraphIdx = gMeme.lines.findIndex(line => {
    //     if (line) {
    //         return el.textContent === line.txt
    //     }
    // })

    // console.log('pr:', gMeme.selectedLineIdx)
    // gMeme.selectedLineIdx = pargraphIdx
    // console.log(gMeme.selectedLineIdx)
    // value.id = document.getElementById(`line-${gMeme.selectedLineIdx}`)
    // value.style.color = 'black'
    gMeme.selectedLineIdx = value.id
    console.log('this:', value.id)
    value.style.borderStyle = "solid"
    value.style.borderWidth = "1px"
    value.style.borderColor = "black"
    // const selectPargraph = document.getElementById(`line-${gMeme.selectedLineIdx}`)
}
