var luminosity = function luminosity (r, g, b) {
	var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
	return luminance
	// console.log(luminance > 155 ? 'light' : 'dark')
	// return luminance > 155 ? 'light' : 'dark'
}

var darken = function darken (r,g,b) {
	// console.log([r*.8, g*.8, b*.8])
	return [r*.8, g*.8, b*.8]
}

module.exports = {
	luminosity : luminosity,
	darken : darken
};