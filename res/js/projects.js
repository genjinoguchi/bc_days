//Projects page

//Variables
var areProjectsVisible = false;
var timer;

//A dictionary of projects
var projects = [];

//Init the projects.

function Project(name, id, year, month, path, fileType, centerx, centery, speedx, speedy){
	var name, year, month, path, fileType;
	this.name = name;
	this.id = id;
	this.year = year;
	this.month = month;
	this.path = path;
	this.fileType = fileType;
	this.centerx = centerx;
	this.centery = centery;
	//this.speed = Math.random();
	this.speedx = speedx;
	this.speedy = speedy;

	this.getName = function(){ return name;}
	this.getID = function(){ return id;}
	this.getYear = function(){ return year;}
	this.getMonth = function(){ return month;}
	this.getPath = function(){ return path;}
	this.getFileType = function(){ return fileType;}
	this.update = function(){
		this.centerx += this.speedx;
		this.centery += this.speedy;
		var element = document.getElementById(id);
		element.style.top = (this.centery-100).toString()+"px";
		element.style.left = (this.centerx-100).toString()+"px";

		//Wall collisions
		if(this.centerx>=docWidth-100 || this.centerx<=100){
			this.speedx *= -1;
		}
		if(this.centery>=docHeight-100 || this.centery<=100){
			this.speedy *= -1;
		}
	}
	
}

//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
hackNYU = new Project("Hack NYU", "hackNYU", 2014, 5, "./res/projects/hackNYU/", ".png", 100, 200,1,1);
Pool3D = new Project("3D Pool", "Pool3D", 2014, 6, "./res/projects/Pool3D/", ".png", 200,400,-1,0.5);
StuySciOlyHome = new Project("Stuyvesant Science Olympiad's New Homepage", "StuySciOlyHome", 2014, 7, "./res/projects/StuySciOlyHome/", ".JPG", 300,600,0,2);

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
