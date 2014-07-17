//Projects page


//A dictionary of projects
var projects = {}


//Init the projects.



//Functions

function projectPageActions(){

}

function hideProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "none";

}
function showProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "block";
	$("#heading-projects").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
}
