'use strict'
const express = require('express')
const wserv = express()
const compression = require('compression')
const bodyParser = require('body-parser')

const C = (require('./config/Config'))
global.Config = new C()

//###################### start the wserv
wserv.use('/ssr', require('./wcode/route/ssrPg')) 

wserv.use(bodyParser.urlencoded({ extended: true }))//form
wserv.use('/legacy', require('./wcode/legacy/frm')) 

//###################### start the wserv
wserv.use(express.static('webroot'))
wserv.use(compression())

wserv.listen(Config.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+Config.PORT)
	console.log('Press Ctrl+C to quit.')
})

