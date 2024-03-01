'use strict'
let gElCanvas
let gCtx
let gStartPos
var font = 'Arial'
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'president', 'fat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animal', 'dogs', 'love'] },
    { id: 3, url: 'img/3.jpg', keywords: ['child', 'dogs', 'love'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'dogs', 'funny'] },
    { id: 5, url: 'img/5.jpg', keywords: ['child', 'sea', 'funny'] },
    { id: 6, url: 'img/6.jpg', keywords: ['person', 'smart', 'explain'] },
    { id: 7, url: 'img/7.jpg', keywords: ['child', 'funny', 'eyes'] },
    { id: 8, url: 'img/8.jpg', keywords: ['smart', 'person', 'eyes'] },
    { id: 9, url: 'img/9.jpg', keywords: ['child', 'person', 'smart'] },
    { id: 10, url: 'img/10.jpg', keywords: ['smart', 'person', 'president'] },
    { id: 11, url: 'img/11.jpg', keywords: ['sport', 'love', 'funny'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'person', 'check'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cheers', 'person'] },
    { id: 14, url: 'img/14.jpg', keywords: ['person', 'metrix', 'sunglass'] },
    { id: 15, url: 'img/15.jpg', keywords: ['person', 'smart', 'eyes'] },
    { id: 16, url: 'img/16.jpg', keywords: ['person', 'smart', 'funny'] },
    { id: 17, url: 'img/17.jpg', keywords: ['person', 'president', 'funny'] },
    { id: 18, url: 'img/18.jpg', keywords: ['person', 'toy', 'funny'] },
]

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    // addListeners()
}

function renderCanvasImg(img) {
    renderImg(img)
    const elEditorSection = document.querySelector('.meme-editor-page')
    elEditorSection.classList.remove("hide")

    const myElement = document.getElementById('myElement')
    myElement.style.display = 'none'
}

function renderOnCanvas(){
        gCtx.drawImage(saveImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach(line => {
            gCtx.lineWidth = 2
            gCtx.strokeStyle = 'black'
            gCtx.fillStyle = line.color
            gCtx.font = line.size
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

function onChangeLine(value) {
    gMeme.selectedLineIdx = value + 1
    if (gMeme.selectedLineIdx >= gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    }
}

function onAddTxt(txt) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = txt.value
    gElCanvas.height = (saveImg.naturalHeight / saveImg.naturalWidth) * gElCanvas.width
    renderOnCanvas()
}

function onRemoveline(lineCut) {
    removeLine(lineCut)
    renderOnCanvas()
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function onFontSize(value) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)
    const newFontSize = currentFontSize + value
    selectedLine.size = newFontSize + 'px' + ' ' + font
    renderOnCanvas()
}

function onSetFont(value) {
    font = value.value
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const currentFontSize = parseInt(selectedLine.size)
    selectedLine.size = currentFontSize + 'px' + ' ' + value.value
    renderOnCanvas()   
}

function setColors() {
    const elColor = document.querySelector('[name="colorTxt"]')
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.color = elColor.value
    renderOnCanvas()
}

function onFilterByName() {
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase()
    
    gImgs.forEach(img => {
        const elImg = document.getElementById(`${img.id}`)
        let shouldDisplay = false

        if (searchInput === "") {
            shouldDisplay = true 
        } else {
            img.keywords.forEach(word => {
                if (word.toLowerCase().includes(searchInput)) {
                    shouldDisplay = true
                }
            });
        }

        if (shouldDisplay) {
            elImg.style.display = 'block'
        } else {
            elImg.style.display = 'none'
        }
    })
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onToggleMenu(){
    document.body.classList.toggle('menu-open')
}

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function getEvPos(ev) {
// 	let pos = {
// 		x: ev.offsetX,
// 		y: ev.offsetY,
// 	}

// 	if (TOUCH_EVENTS.includes(ev.type)) {
		
// 		ev.preventDefault()         // Prevent triggering the mouse events
// 		ev = ev.changedTouches[0]   // Gets the first touch point

// 		// Calc pos according to the touch screen
// 		pos = {
// 			x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
// 			y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
// 		}
// 	}
// 	return pos
// }


