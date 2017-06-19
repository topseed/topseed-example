
var algoliasearch = require('algoliasearch')
var client = algoliasearch('XO3LSEXN6Y', '21ffff287ac97c39416ddcd54ad74db6')
var table = client.initIndex('links')

var row = {
	page: 'image'
	, headline : 'head'
	, url : 'http://news.com'
	, dateTime : 123
	, tags : ['one', 'two']
}
table.addObject(row)

var pro = table.browse()
pro.then(function(content){
	console.log(content.hits)
})
