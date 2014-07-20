//Projects page

//Variables
var areProjectsVisible = false;

//A dictionary of projects
var projects = [];

//Init the projects.

function Project(name, id, year, month, path, fileType, topDistance, leftDistance){
	var name, year, month, path, fileType;
	this.name = name;
	this.id = id;
	this.year = year;
	this.month = month;
	this.path = path;
	this.fileType = fileType;
	this.topDistance = topDistance;
	this.leftDistance = leftDistance;

	this.getName = function(){ return name;}
	this.getID = function(){ return id;}
	this.getYear = function(){ return year;}
	this.getMonth = function(){ return month;}
	this.getPath = function(){ return path;}
	this.getFileType = function(){ return fileType;}
	this.update = function(){
		var element = document.getElementById(id);
		element.style.top = topDistance.toString()+"px";
		element.style.left = leftDistance.toString()+"px";
		console.log(id);
		console.log(leftDistance.toString());
		console.log(topDistance.toString());
	}
}

//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
hackNYU = new Project("Hack NYU", "hackNYU", 2014, 5, "./res/projects/hackNYU/", ".png", 0, 200);
Pool3D = new Project("3D Pool", "Pool3D", 2014, 6, "./res/projects/Pool3D/", ".png", 0,400);

//projects.push(codeDayJan);
projects.push(hackNYU);
projects.push(Pool3D);

//Functions

function projectPageActions(){
	if(areProjectsVisible){
		var timer = setInterval(positionProjects(), 1000);
	}
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
	areProjectsVisible = false;
}
function showProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "block";
	$("#heading-projects").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
	areProjectsVisible = true;
}
