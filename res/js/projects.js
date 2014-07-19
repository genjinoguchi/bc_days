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

	function getName(){ return name;}
	function getYear(){ return year;}
	function getMonth(){ return month;}
	function getPath(){ return path;}
	function getFileType(){ return fileType;}
}

codeDayJan = new Project("CodeDay NY", 2014, 1, "../projects/codeDayJan", ".png");
//hackNYU = new Project("Hack NYU", 2014, 5, "../projects.hackNYU", ".png");
Pool3D = new Project("3D Pool", 2014, 6, "../projects/Pool3D", ".png");

projects.push(codeDayJan);
//projects.push(hackNYU);
projects.push(Pool3D);

//Functions

function projectPageActions(){
	
}
function initProjects(){
	var total;
	console.log("hurr");

	for(var i=0;i<projects.length;i++){
		total += addProject(projects[i]);
	}
	document.getElementById("projects-display").inner = total;
}
function addProject(project){
	var total = "";
	total += "<img class=\"project-icon\" src=\"";
	total += project.getPath() + "thumbnail" + project.getFileType() + "\"";
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
