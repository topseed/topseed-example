
function Minit( ) {// 'closure|module'-iso.
	console.log('ps list')

	const ROOT = 'http://localhost:8081/'
	class DS extends BDS {
		doFetch(data, token) {
			return BDS.fetch(window.fetch, ROOT, 'linksPg/list', data, token)
				.then(function(value) { 
					console.log('back')
					//console.log(JSON.stringify(value))
					return value
			})//BDS
		}//doFetch
	}//class

	class PgBLX extends BLX {// NO UI, or render in this layer
		init(nam, le) {
			this._le = le
			this._nam = nam
			const thiz = this
			const pro = this._ds.doFetch()
			pro.then(function(val) {
				//console.log(val)
				thiz.render(val, thiz._nam, thiz._le)
			}).catch(function (er) {
				console.log(er)
			})//c
		}

		render(values, nam, le) {
			le.init(values) // could be stream//observer

		}//()
	}//class

	const ds = new DS()
	const bl = new PgBLX(ds)

	const leaavingPg = flyd.on(cleanUp, bl.observer('TT'))
	function cleanUp() {
		//console.log('TT list')
	}//()

return bl//instance to page 
}