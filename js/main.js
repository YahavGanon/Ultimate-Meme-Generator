'use strict'
let gElCanvas
let gCtx
let gStartPos
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

// function downloadImg(elLink) {
//     const imgContent = gElCanvas.toDataURL('image/jpeg')
//     elLink.href = imgContent
// }

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



