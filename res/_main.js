//main js script

//Constants
var menuToggled = false;

//A dictionary of projects
var projects = {}


//Init the projects.





//jQuery Actions

$(document).ready(function(){
	intro();

	$("#option-button").click(function(){
		toggleMenu();
	});
})

//Functions

function intro(){
	$("#heading-main").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
	
	$("#pointer").delay(1000).show("slow");
}

function toggleMenu(){
	if(!menuToggled){
		//Change this to javascript animations later on.
		document.getElementById("side-menu-bar").style.left = "0px";
		document.getElementById("intro-page").style.right = "-400px";
		document.getElementById("option-button").style.left = "30%";
		$("#pointer").delay(1000).hide("slow");
	}else{
		document.getElementById("side-menu-bar").style.left = "-400px";
		document.getElementById("intro-page").style.right = "0px";
		document.getElementById("option-button").style.left = "2%";
	}
	menuToggled = !menuToggled;
}