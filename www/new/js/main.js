
/*
TT.ScontentID ='#ss'
TT.handle(function(evt) {
	if(TT.PRE==evt.typ)  {//start
		console.log(evt.$new)
		//$('#content-wrapper').fadeTo(100,.2)
	}
	if(TT.PAGE==evt.typ)  {//new pg loaded
		$(TT.ScontentID).html(evt.$new)
		//$('#content-wrapper').fadeTo(100,1)
	}
})
*/

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