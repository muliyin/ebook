/*json与对象相互转换*/

import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, value) {
	return localStorage.set(key, value)
}

export function getLocalStorage(key) {
	return localStorage.get(key)
}

export function removeLocalStorage(key) {
	return localStorage.delete(key)
}

export function clearLocalStorage() {
	return localStorage.clear()
}

/**
 * 为每本电子书设置存储空间
 * @param fileName 书名
 * @param key
 * @param value
 */
export function setBook(fileName, key, value) {
	let book = getLocalStorage(`${fileName}-info`)
	if (!book) {
		book = {}
	}
	book[key] = value
	setLocalStorage(`${fileName}-info`, book)
}

/**
 * 获取电子书
 * @param fileName
 * @param key
 * @returns {null|*}
 */
export function getBook(fileName, key) {
	let book = getLocalStorage(`${fileName}-info`)
	if (book) return book[key]
	else return null
}

/**
 * 获取字体
 * @param fileName
 * @returns {*}
 */
export function getFontFamily(fileName) {
	return getBook(fileName, 'fontFamily')
}

/**
 * 保存字体
 * @param fileName
 * @param font
 */
export function saveFontFamily(fileName,font) {
	return setBook(fileName,'fontFamily',font)
}

