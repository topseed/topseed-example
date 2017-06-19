'use strict'
const express = require('express')
const bsrv = express()
const bodyParser = require('body-parser')

const C = (require('./config/Config'))
global.bsrvConfig = new C()

bsrv.use(bodyParser.json())

//linkBlg 
bsrv.use('/linksPg', require('./scode/route/LinksPg')) 
bsrv.use('/adminPg', require('./scode/route/AdminPg')) 
bsrv.use('/loginPg', require('./scode/route/LoginPg')) 

//###################### start the bsrv
bsrv.listen(bsrvConfig.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+bsrvConfig.PORT)
	console.log('Press Ctrl+C to quit.')
})

/*
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
*/