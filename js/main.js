console.log("init");

var App = new Marionette.Application();


/* Define Regions */
App.addRegions({
	headerRegion		: "#header",
	mainRegion			: "#main",
	portfolioRegion		: "#portfolio",
	footerRegion		: "#footer"
})

/* init */
App.on("start", function() {
	console.log("App starting");

})



App.on("start",function(){
	console.log("STARTING");
	var staticView = new App.StaticView();
	App.fourthRegion.show(staticView);

	var placeView = new App.PlaceView({model:p1});
	App.secondRegion.show(placeView);

	var placesView = new App.PlacesView({collection:c});
	App.thirdRegion.show(placesView);

	var compView = new App.CompView({collection:c, model : person});
	App.firstRegion.show(compView);

	Backbone.history.start();

});
