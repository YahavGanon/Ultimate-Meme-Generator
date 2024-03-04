'use strict'

function getEvPos(ev) {
	let pos = {
		x: ev.offsetX,
		y: ev.offsetY,
	}

	if (TOUCH_EVENTS.includes(ev.type)) {
		
		ev.preventDefault()         // Prevent triggering the mouse events
		ev = ev.changedTouches[0]   // Gets the first touch point

		// Calc pos according to the touch screen
		pos = {
			x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
			y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
		}
	}
	return pos
}

function isTextClicked(clickedPos) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const textWidth = gCtx.measureText(selectedLine.txt).width
    const textHeight = parseInt(selectedLine.size)
    return (
        clickedPos.x >= selectedLine.x - textWidth / 2 &&
        clickedPos.x <= selectedLine.x + textWidth / 2 &&
        clickedPos.y >= selectedLine.y - textHeight / 2 &&
        clickedPos.y <= selectedLine.y + textHeight / 2
    )
}

function setTextDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function onDown(ev) {
	
	gStartPos = getEvPos(ev)        // Get the ev pos from mouse or touch
	if (!isTextClicked(gStartPos)) return

	setTextDrag(true)
	//Save the pos we start from
	document.body.style.cursor = 'grabbing'
}

const getText = () => gMeme.lines[gMeme.selectedLineIdx]

function moveText(dx, dy) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.x += dx
    selectedLine.y += dy
}

function onMove(ev) {
	const { isDrag } = getText()
	if (!isDrag) return

	const pos = getEvPos(ev)
	// Calc the delta, the diff we moved
	const dx = pos.x - gStartPos.x
	const dy = pos.y - gStartPos.y
	moveText(dx, dy)

	// Save the last pos, we remember where we`ve been and move accordingly
	gStartPos = pos
	
    // The canvas is rendered again after every move
    renderOnCanvas()
}

function setTextDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function onUp() {
	setTextDrag(false)
	document.body.style.cursor = 'default'
}