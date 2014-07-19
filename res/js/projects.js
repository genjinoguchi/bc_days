//Projects page


//A dictionary of projects
var projects = [];

//Init the projects.

function Project(name, year, month, path, fileType){
	var name, year, month, path, fileType;
	this.name = name;
	this.year = year;
	this.month = month;
	this.path = path;
	this.fileType = fileType;

	this.getName = function(){ return name;}
	this.getYear = function(){ return year;}
	this.getMonth = function(){ return month;}
	this.getPath = function(){ return path;}
	this.getFileType = function(){ return fileType;}
}

//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
hackNYU = new Project("Hack NYU", 2014, 5, "./res/projects/hackNYU/", ".png");
Pool3D = new Project("3D Pool", 2014, 6, "./res/projects/Pool3D/", ".png");

//projects.push(codeDayJan);
projects.push(hackNYU);
projects.push(Pool3D);

//Functions

function projectPageActions(){
	
}
function initProjects(){
	var total = "";

	for(var i=0;i<projects.length;i++){
		total += addProject(projects[i]);
	}
	console.log(total);
	document.getElementById("projects-display").innerHTML = total;
}
function addProject(project){
	var total = "";
	total = "<img class=\"project-icon\" src=\"";
	total += project.getPath() + "thumbnail" + project.getFileType() + "\" width=\"200\" heigth=\"200\"";
	total += ">\n";
	return total;
}


function hideProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "none";
	$("#heading-projects").velocity({
		opacity: '0',
		top: '200px'
	}, "slow");
}
function showProjectPage(){
	//Subject to change
	document.getElementById("projects-page").style.display = "block";
	$("#heading-projects").velocity({
		opacity: '1',
		top: '250px'
	}, "slow");
}
