'use strict'
class BLX  { //ideally integration/regresion testable iso. loosley coupled pg services class, for webcomps, DS/fetch, and such., pg business layer.  based on compsable observers (streams/FRP)

	constructor(ds) {
		console.log('base')
		this._ds = ds
		this._streams= {} 	//loosely coupled

		this._redirectFoo = TT.loadPg // for SSR it be different

		this.regObserver('TT',TT.smoothPg)//page stream
	}

	regObserver(key, stm)  {
		this._streams[key]=stm
	}

	observer(key) {//get
		return this._streams[key]
	}

	_redirect(url) { // go to another page
		this._redirectFoo(url)
	}
}//class

// for node:
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = BLX //node