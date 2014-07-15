//main js script

//Constants


//Variables
var position = 0;
var inFocus;


//jQuery Actions

$(document).ready(function(){
	intro();

	inFocus = $("#intro-page");

	$("#about-option-button").click(function(){
		shiftRight(-400);
	});
	$("#tab-option-button").click(function(){
		shiftRight(400);
	});
	$(inFocus).click(function(){
		shiftRight(0);
	})
})

//Functions

function intro(){
	$("#heading-main").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
	
	$("#tab-pointer").delay(1000).show("slow");
	$("#about-pointer").delay(1000).show("slow");
}

function shiftRight(dist){
	//Change this to javascript animations later on.

	//Main page
	inFocus.velocity({ left: dist+"px", right: dist+"px"}, "slow");

	//Move the buttons and pointers.
	$("#about-option-button").velocity({
		right: '-420px'
	});
	$("#about-pointer").velocity({
		right: '-450px'
	});
	$("#tab-option-button").velocity({
		left: '420px'
	})
	$("#tab-pointer").velocity({
		left: '450px'
	})
	
	//Move the tab(s)
	//document.getElementById("about-tab").style.right = "0px";
	position = dist;
}

function shiftRight(dist){
	//Change this to javascript animations later on.

	//Move the main page.
	inFocus.velocity({ left: dist+"px", right: dist+"px"}, "slow");
	
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

	//document.getElementById("about-tab").style.right = "-400px";

	position = dist;

}
