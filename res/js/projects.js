//Projects page

//Variables
var areProjectsVisible = false;
var timer;

//A dictionary of projects
var projects = [];


//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
hackNYU = new Project("Hack NYU", "hackNYU", 2014, 5, "./res/projects/hackNYU/", ".png", 200, 200,5,1);
Pool3D = new Project("3D Pool", "Pool3D", 2014, 6, "./res/projects/Pool3D/", ".png", 400,400,-3,4);
StuySciOlyHome = new Project("Stuyvesant Science Olympiad's New Homepage", "StuySciOlyHome", 2014, 7, "./res/projects/StuySciOlyHome/", ".JPG", 600,300,0,7);

//projects.push(codeDayJan);
projects.push(hackNYU);
projects.push(Pool3D);
projects.push(StuySciOlyHome)
//Functions

function projectPageActions(){
	positionProjects();
	setTimeout(projectPageActions,20);
}
function initProjects(){
	var total = "";

	for(var i=0;i<projects.length;i++){
		total += addProject(projects[i]);
	}
	document.getElementById("projects-display").innerHTML = total;
}
function addProject(project){
	var total = "";
	total += "<div id=\"" + project.getID() + "\" class=\"project-icon\">";
	total += "<img id=\"" + project.getID()+"-thumbnail" + "\" class=\"circle\" src=\"";
	total += project.getPath() + "thumbnail" + project.getFileType() + "\"";
	total += ">\n</div>\n";
	return total;
}

function positionProjects(){
	for(var x=0;x<projects.length;x++){
		projects[x].update();
	}
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
	//Subject to change
	document.getElementById("projects-page").style.display = "block";
	$("#heading-projects").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
}
