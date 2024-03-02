'use strict'
const DB_IMG_STR = 'DB_img'
const DB_MEME = 'DB_meme'

function saveToStorage(key, val) {
    const strVal = JSON.stringify(val)
	localStorage.setItem(key, strVal)
}

function loadFromStorage(key) {
	var val = localStorage.getItem(key)
	return JSON.parse(val)
}