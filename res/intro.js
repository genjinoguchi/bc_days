//main js script

//Constants


//Variables
var aboutPaneToggled = false;
var tabPaneToggled = false;
var inFocus;


//jQuery Actions

$(document).ready(function(){
	intro();

	inFocus = $("#intro-page");

	$("#about-option-button").click(function(){
		toggleAboutPane();
	});
	$("#tab-option-button").click(function(){
		toggleTabPane();
	});
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

function toggleAboutPane(){
	if(!aboutPaneToggled){
		//Change this to javascript animations later on.

		//Move the buttons and pointers.
		$("#about-option-button").velocity({
			right: '420px'
		});
		$("#about-pointer").velocity({
			right: '450px'
		});
		$("#tab-option-button").velocity({
			left: '-420px'
		})
		$("#tab-pointer").velocity({
			left: '-450px'
		})
		
		//Move the tab(s)
		//document.getElementById("about-tab").style.right = "0px";

		inFocus.velocity({ left: "-400px", right: "400px"}, "slow");


	}else{
		//Move the main page.

		inFocus.velocity({ left: "0px", right: "0px"}, "slow");
		
		//Move the buttons and pointers.
		$("#about-option-button").velocity({
			right: '30px'
		});
		$("#about-pointer").velocity({
			right: '60px'
		})
		$("#tab-option-button").velocity({
			left: '30px'
		})
		$("#tab-pointer").velocity({
			left: '60px'
		})


		//document.getElementById("about-tab").style.right = "-400px";
		
	}
	aboutPaneToggled = !aboutPaneToggled;
}

function toggleTabPane(){
	if(!tabPaneToggled){
		//Change this to javascript animations later on.

		//Main page
		inFocus.velocity({ left: "400px", right: "-400px"}, "slow");

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

	}else{
		//Move the main page.
		inFocus.velocity({ left: "0px", right: "0px"}, "slow");
		
		//Move the buttons and pointers.
		$("#about-option-button").velocity({
			right: '30px'
		});
		$("#about-pointer").velocity({
			right: '60px'
		})
		$("#tab-option-button").velocity({
			left: '30px'
		})
		$("#tab-pointer").velocity({
			left: '60px'
		})


		//document.getElementById("about-tab").style.right = "-400px";


		
	}
	tabPaneToggled = !tabPaneToggled;
}
