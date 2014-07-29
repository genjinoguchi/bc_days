//Projects page

//Variables
var areProjectsVisible = false;
var timer;

//A dictionary of projects
var projects = [];


//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
hackNYU = new Project("Hack NYU", "hackNYU", 2014, 5, "./res/projects/hackNYU/", ".png", 200, 300,0,0);
Pool3D = new Project("3D Pool", "Pool3D", 2014, 6, "./res/projects/Pool3D/", ".png", 350, 400,0,0);
StuySciOlyHome = new Project("Stuyvesant Science Olympiad's New Homepage", "StuySciOlyHome", 2014, 7, "./res/projects/StuySciOlyHome/", ".JPG", 200, 500,0,0);
ZeroPool = new Project("A new take on 3D Pool", "ZeroPool", 2014, 8, "./res/projects/ZeroPool/",".JPG",700,200,-Math.random()*20,5);

//projects.push(codeDayJan);
projects.push(hackNYU);
projects.push(Pool3D);
projects.push(StuySciOlyHome);
projects.push(ZeroPool);

//Functions

function projectPageActions(){
	positionProjects();
	setTimeout(projectPageActions,1000/FPS);
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

	//Thumbnail
	total += "<img id=\"" + project.getID()+"-thumbnail" + "\" class=\"circle\" src=\"";
	total += project.getPath() + "thumbnail" + project.getFileType() + "\"";
	total += "onmouseover=\""+project.getID()+".displayHoverInfo()\"";
	total += "onmouseout=\""+project.getID()+".hideHoverInfo()\"";

	total += ">\n";

	//Thumbnail Descriptions
	//left
	total += "<div";
	total += "id=\""+project.getID()+"-thumbnail-description-left\"";
	total += "class=\"thumbnail-description\"";
	total += "</div>\n";
	//right
	total += "<div";
	total += "id=\""+project.getID()+"-thumbnail-description-right\"";
	total += "class=\"thumbnail-description\"";
	total += "</div>\n";

	//Onclick Descriptions


	total += "</div>\n";
	return total;
}

function positionProjects(){
	for(var x=0;x<projects.length;x++){
		projects[x].update();
	}
	//console.log("hurrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
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
