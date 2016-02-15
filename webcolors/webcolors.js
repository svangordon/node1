var request = require('request')

var searchKey = process.argv[2].toUpperCase()



request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var webColors = JSON.parse(body),
		colors;
		webColors.some( function(cur,i) {
			if ( searchKey === cur.name.toUpperCase() ) {
				// console.log(cur.rgb)
				colors = cur.rgb
				return true
			} else {
				return false
			}
		})
		// console.log(colors)
		if (colors === undefined) {
			console.log('Error: color not found')
			return 'Error: color not found'
		} else {
			console.log(colors.r , colors.g , colors.b )
			return colors
		}
	}
})
