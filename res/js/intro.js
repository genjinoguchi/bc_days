//main js script

//Constants

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
	hideProjectPage();
	hideHomePage();

	showProjectPage();

	initProjects();

	homePageActions();
	projectPageActions();

	detectTabClicks();
	tabActions();
})

//Functions
function logMouseLocation(event){
	mouseX = event.clientX;
	mouseY = event.clientY;
}

function intro(){
	$("#tab-pointer").delay(1000).show("slow");
	$("#about-pointer").delay(1000).show("slow");
}

function homePageActions(){
	
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
		top: '250px'
	}, "slow");
}

function detectTabClicks(){
	$("#home-tab").click(function(){
		showHomePage();
		hideProjectPage();
		shiftRight(0);
		$("body").css("overflow", "auto");
	});
	$("#projects-tab").click(function(){
		hideHomePage();
		showProjectPage();
		shiftRight(0);
		$("body").css("overflow", "auto");
	});
}

function tabActions(){
	$("#about-option-button").click(function(){
		if($("body").css("overflow")==="hidden"){
			shiftRight(0);
			$("body").css("overflow","auto");
		}else{
			shiftRight(-400);
			$("body").css("overflow", "hidden");
		}
	});
	$("#tab-option-button").click(function(){
		if($("body").css("overflow")==="hidden"){
			shiftRight(0);
			$("body").css("overflow", "auto");
		}else{
			shiftRight(400);
			$("body").css("overflow", "hidden");
		}
	});
	$("#main-section").click(function(){
		shiftRight(0);
		$("body").css("overflow", "auto");

		//$("#main-section").css("z-index", "10");
	});
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
