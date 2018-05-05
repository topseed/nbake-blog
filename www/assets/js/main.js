
loadjs.ready('style', function(){
	tsrouter.zone ='.pusher'
	tsrouter.onNavigate(function(evt) {
		if (evt.type == tsrouter.NAV)  {
			//console.log('tsrouter nav')
		}
		else if (evt.type == tsrouter.PAGE)  {
			//console.log('tsrouter PAGE')
			$(tsrouter.zone).html(evt.newContent)
			window.scrollTo(0, 0)
		}
	})
})