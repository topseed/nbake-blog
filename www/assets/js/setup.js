
 // http://github.com/muicss/loadjs/issues/56

 // https://jsfiddle.net/muicss/4791kt3w
 function require(bundleIds, callbackFn) {
	bundleIds.forEach(function(bundleId) {
		if (!loadjs.isDefined(bundleId)) loadjs(bundles[bundleId], bundleId)
	})
	loadjs.ready(bundleIds, callbackFn)
}

// polyfills
if (!window.Promise) {
	/* load bundle 'promise' */
	loadjs(['//cdn.jsdelivr.net/es6-promise-polyfill/1.2.0/promise.min.js'], 'promise', {
		async: false //required due to loadjs bug with bundles
	})
}
else loadjs.done('promise') /* we already have it */

if (!window.fetch) {
	loadjs(['//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js'], 'fetch', {
		async: false //required due to loadjs bug with bundles
	})
}
else loadjs.done('fetch')

///////////////////////////////////////////////////////////////////////////////////
// ready = "when done with bundle(s)"
loadjs.ready(['promise','fetch'], function () {
	/* load bundle 'core' */
	loadjs([
		'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js'
		,'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
		,'/assets/js/tsrouter.js'
	], 'core' /* bundle ID */, {
		async: false //required due to loadjs bug with bundles
	})
})
loadjs.ready(['core'], function () {
	//window['SITE'] = new signals.Signal() //site events
	loadjs([ '/assets/css/semantic.min.js'
		], 'cssJs', {
		async: false //required due to loadjs bug with bundles
	})
	$( document ).ready(function() {
		loadjs.done('site') // "done with bundle 'site'", need this because we're not loading js here
	})
})//()

function cssLoaded() {// called by the style sheet in layout
	console.log('css loaded', Date.now()-_start)
	loadjs([ '/assets/css/main.css'
		], 'css', {
		async: false //required due to loadjs bug with bundles
	})
	//loadjs.done('css')
}

loadjs.ready(['css', 'cssJs', 'site'], function () {
	setTimeout(function(){
		loadjs.done('style')
	},1)
})

loadjs.ready('style', function(){
	tsrouter.zone ='.pusher'
	tsrouter.onNavigate(function(evt) {
		if (evt.type == tsrouter.NAV)  {
		}
		else if (evt.type == tsrouter.PAGE)  {
			$(tsrouter.zone).html(evt.newContent)
			window.scrollTo(0, 0)
		}
	})
})


// usage: ////////////////////////////////////////////////////////////////////
loadjs.ready(['core'], function () {// load data
	console.log('core done', Date.now()-_start)
})
loadjs.ready(['site'], function () {// do nav, signal is ready, but not style
	console.log('site done', Date.now()-_start)
})
loadjs.ready(['style'], function () {// 'show' page, ex: unhide
	console.log('style done', Date.now()-_start)
})

