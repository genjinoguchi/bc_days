// Main JS Script
console.log("init");

//Constants
var FPS = 60;

//Variables
var position = 0;
var mouseX, mouseY;
var docHeight = $(window).height(),
	docWidth  = $(window).width();

var App = new Marionette.Application();
var options = {};

/* Define Marionette MVC */
// Views :: static for now.
App.HomePageView = Marionette.ItemView.extend({
	template	: "#landing-template"
})
App.PortfolioPageView = Marionette.ItemView.extend({
	template	: "#portfolio-template"
})
App.NavBarView = Marionette.ItemView.extend({
	template	: "#navbar-template"
})
App.AboutPageView = Marionette.ItemView.extend({
	template	: "#about-template"
})

// Controllers
App.MainController = Marionette.Controller.extend({
	initialize : function(options) {
		console.log("Initializing controller...");
	},
	start : function(options) {
		console.log("Starting controller...");
	},

	landingRoute : function() {
		//intro();
		App.mainRegion.show(new App.HomePageView());
		App.body.show(new App.NavBarView());
		showHomePage();
	},
	portfolioRoute : function() {
		intro();
		App.mainRegion.show(new App.PortfolioPageView());
		App.body.show(new App.NavBarView());
	}
})
App.addInitializer( function(options) {
	App.mainController = new App.MainController();	
})

// Router
App.addInitializer( function(options) {
	App.router = new Marionette.AppRouter({
		initialize : function() {
			console.log("Router initialized.");
		},
		start : function() {
			console.log("Router started");
		},
		controller : App.mainController,

		appRoutes  : {
			"/"				: "landingRoute",
			portfolio		: "portfolioRoute"
		}
	})
})


/* initialize marionette app */
App.on("before:start", function(options) {
	/* Perhaps put a loading animation in here? */
	console.log("Initializing Marionette App....");

})

App.on("start", function(options) {
	console.log("Marionette App starting.");
	
	
	/* Defining Regions */
	console.log("Initializing Regions")
	App.addRegions({
		//headerRegion		: "#header",
		//footerRegion		: "#footer",
		mainRegion			: "#main-section",
		body				: "body"
	})

	var homePageView = new App.HomePageView(),
		navBarView = new App.NavBarView();
	App.mainRegion.show(homePageView);
	//App.body.show(navBarView);
	intro();	


	if(Backbone.history) {
 		console.log("Starting Backbone history")
		Backbone.history.start();
	}

})

App.start(options);





/*
intro();
loadAge();
hideProjectPage();
hideHomePage();
hideAboutPage();

//initProjects();

showProjectPage();
showHomePage();
//showAboutPage();

homePageActions();

detectTabClicks();
tabActions();
*/
