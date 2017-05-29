'use strict'
loadjs.ready(['dependencyIE', 'keyLibs'], {// loaded setup libs
	success: function(){
		loadjs([
			'/_js/BDS.js'
			//,'/_js/BPS.js'

			], { success: function(){
				console.log('loaded')
				tst1()
			}
	})//loadjs
	}//suc
})


const ROOT = 'http://localhost:8081/'
function tst1() {
	// class:
	class Page1BDS extends BDS {
		doFetch(data, token) {
			return BDS.fetch(window.fetch, ROOT, 'adminPg/add', data, token)
				.then(function(value) { 
					console.log('back')
					console.log(JSON.stringify(value))
					return value
			})//BDS
		}//doFetch
	}//class
	const ds = new Page1BDS()
	QUnit.test( 'test: fetch()', function( assert ) {
		//assert.expect(1)
		const done = assert.async()

		const obj = new Object()
		obj.user='vic'
		obj.password='123'

		const pro = ds.doFetch(obj, obj)
		pro.then(function(val) {
			console.log(val)
			assert.ok(true, 'we got data')
			done()

		}).catch(function (er) {
			console.log(er)
		})//c
	})//qu

}//()