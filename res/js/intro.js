//main js script

//Constants
var FPS = 60;

//Variables
var position = 0;
var docHeight;
var docWidth;
var mouseX, mouseY;

//jQuery Actions

$(document).ready(function(){
	docHeight = $(window).height();
	docWidth = $(window).width();

	intro();
	loadAge();
	hideProjectPage();
	hideHomePage();
	hideAboutPage();

	//initProjects();

	//showProjectPage();
	showHomePage();

	homePageActions();

	detectTabClicks();
	tabActions();
})

//Functions

function intro(){
	slideTabPane(-600);
	slideAboutTab(-600);
	$("#tab-pointer").delay(1000).show("slow");
	$("#about-pointer").delay(1000).show("slow");
}

function homePageActions(){
	$("#gmail-link").click(function(){
		$("#send-message").fadeToggle();
	})
}

function hideHomePage(){
	//Subject to change
	document.getElementById("intro-page").style.display = "none";
	$("#heading-main").velocity({
		opacity: '0',
		top: '200px'
	}, "slow");
}

function showHomePage(){
	document.getElementById("intro-page").style.display = "block";
	$("#heading-main").velocity({
		opacity: '1',
		top: '20%'
	}, "slow");
}

function hideAboutPage(){
	$("#about-page").velocity({
		right: "-1000px"
	})
}

function showAboutPage(){
	$("#about-page").velocity({
		right: "0px"
	})
}

function detectTabClicks(){
	$("#home-tab").click(function(){
		showHomePage();
		hideProjectPage();
		hideTabs();
	});
	$("#projects-tab").click(function(){
		hideHomePage();
		showProjectPage();
		hideTabs();
	});
	$(".read-on").click(function(){
		console.log("here")
		showAboutPage();
	})
}

function tabActions(){
	$("#about-option-button").click(function(){
		slideAboutTab("0%");
		$("#main-section").css("-webkit-filter", "brightness(0.4)");
	});
	$("#tab-option-button").click(function(){
		slideTabPane(0);
		$("#main-section").css("-webkit-filter", "brightness(0.4)");
	});
	$("#main-section").click(function(){
		hideTabs();
		hideAboutPage();
	});
}

function hideTabs(){
	slideTabPane(-600);
	slideAboutTab(-600);
	$("#main-section").css("-webkit-filter", "brightness(1)");
}

function slideTabPane(dist){
	$("#tab-pane").velocity({
		left: dist+"px"
	})
}
function slideAboutTab(dist){
	$("#about-tab").velocity({
		right: dist+"px"
	}, "fast")
}

function shiftRight(dist){
	//Change this to javascript animations later on.

	//Move the main page.
	$("#main-section").velocity({ left: dist+"px", right: dist+"px"}, "slow");
	
	//Move the buttons and pointers.
	$("#about-option-button").velocity({
		right: 30-dist+"px"
	});
	$("#about-pointer").velocity({
		right: 60-dist+"px"
	});
	$("#tab-option-button").velocity({
		left: 30+dist+"px"
	});
	$("#tab-pointer").velocity({
		left: 60+dist+"px"
	});

	position = dist;

}


function hideProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "none";
	$("#heading-projects").velocity({
		opacity: '0',
		top: '200px'
	}, "slow");
	timer = null;
}
function showProjectPage(){
	console.log("js why you do this")
	//Subject to change
	document.getElementById("projects-page").style.display = "block";
	$("#heading-projects").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
}

function showDescription(element){
	console.log("hurr")
	$("#"+element).show();

	//document.getElementById(element).style.display="block";
}



