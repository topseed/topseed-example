'use strict'
loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){
		loadjs([
			'//cdn.jsdelivr.net/riot/3.4.4/riot+compiler.min.js'
			,'/_js/BLX.js'
			,'/_js/BDS.js'
			,'/_js/vendor/jquery.jsForm.min.js'

			], { success: function(){
				libsLoaded()
			}
	})//loadjs
	}//suc
})

function libsLoaded(){
	console.log('Loaded libs')
	
	TS.signalAppReady()

	TT.ScontentID ='#content-wrapper'
	TT.handle(function(evt) {
		console.log(':')
		if(TT.PRE==evt.typ)  {//start
			console.log(evt.$new)
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if(TT.PAGE==evt.typ)  {//new pg loaded
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)

		}
	})
}


