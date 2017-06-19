'use strict'

var algoliasearch = require('algoliasearch')

var client = algoliasearch('XO3LSEXN6Y', '21ffff287ac97c39416ddcd54ad74db6')

var table = client.initIndex('links')

var _row = {
	page: 'image'
	, headline : 'head'
	, url : 'http://news.com'
	, dateTime : 123
	, tags : ['one', 'two']
}


// ###################### 
class BaseAg {

	insert(row) {
		table.addObject(row)
	}

	delete(guid) {
		index.deleteObject(guid, function(err) {
		if (err) {
			console.log(err, 'insert')
		}
		})
	}

	listAll() {
		var pro = table.browse()
		pro.then(function(content){
			console.log(content.hits)
			return content.hits
		})

	}

	listPage(txt) {
		var pro = table.search(txt)
		pro.then(function(content){
			console.log(content.hits)
			return content.hits
		})
	}

	search(txt) {
		var pro = table.search(txt)
		pro.then(function(content){
			console.log(content.hits)
			return content.hits
		})
	}

	searchPage(pg, txt) {
		var pro = table.search(pg+' '+ txt)
		pro.then(function(content){
			console.log(content.hits)
			return content.hits
		})
	}


}