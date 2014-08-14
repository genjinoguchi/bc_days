//Projects page

//Variables
var areProjectsVisible = false;
var timer;

//A dictionary of projects
var projects = [];
var hackNYU, Pool3D, StuySciOlyHome, ZeroPool;

//Functions

function projectPageActions(){
	setTimeout(projectPageActions,1000/FPS);
}
function initProjects(){
	projects = [];
	var columns = 4;
	//codeDayJan = new Project("CodeDay NY", 2014, 1, "./res/projects/codeDayJan/", ".png");
	hackNYU = new Project("Hack NYU", "hackNYU",	//Name and ID
	 	2014, 5, 	//Time
	 	"./res/projects/hackNYU/", ".png",	//Location and file type
		0, 0, 	//Starting position
		""
		);
	Pool3D = new Project("3D Pool", "Pool3D",
		2014, 6,
		"./res/projects/Pool3D/", ".png",
		0, 0,
		""
		);
	StuySciOlyHome = new Project("Stuyvesant Science Olympiad's New Homepage", "StuySciOlyHome",
		2014, 7,
		"./res/projects/StuySciOlyHome/", ".JPG",
		0, 0,
		""
		);
	ZeroPool = new Project("A new take on 3D Pool", "ZeroPool",
		2014, 8,
		"./res/projects/ZeroPool/",".JPG",
		700,200,
		""
		);

	//projects.push(codeDayJan);
	projects.push(hackNYU);
	projects.push(Pool3D);
	projects.push(StuySciOlyHome);
	projects.push(ZeroPool);

	var total = "";

	for(var i=0;i<projects.length;i++){
		var x = ((i % columns)*150) + 25;
		var y = ((i / columns)*150) + 25;
		projects[i].setX(x);
		projects[i].setY(y);
		$("#projects-display").append(addProject(projects[i]));
	}
}
function addProject(project){
	var total = "";
	total += "<div id=\"" + project.getID() + "\">";
	
		//Thumbnail
		total += "<div id=\""+project.getID()+"-project-icon\" class=\"project-icon\""
			total += "style=\"";
			total += "top: "+project.getY()+"px;";
			total += "left: "+project.getX()+"px;";
			total += ">";

			total += "<img id=\"" + project.getID()+"-thumbnail" + "\" class=\"icon-lg\" src=\"";
			total += project.getPath() + "thumbnail" + project.getFileType() + "\"";
			//total += "onclick=\""+project.getID()+".toggleProjectPage()\"";
			total += ">\n";

			//Thumbnail Descriptions
			//Bottom icon description
			total += "<div ";
				total += "id=\""+project.getID()+"-thumbnail-description \"";
				total += "class=\"thumbnail-description\">";
				total += project.getThumbnailDescription();
			total += "</div>"
			/*
			//left
			total += "<div ";
				total += "id=\""+project.getID()+"-thumbnail-description-left\"";
				total += "class=\"thumbnail-description\">";
			total += "</div>\n";
			//right
			total += "<div ";
				total += "id=\""+project.getID()+"-thumbnail-description-right\"";
				total += "class=\"thumbnail-description\">";
			total += "</div>\n";
			*/

		total += "</div>\n";

		//Project Page
		total += "<div id=\"" + project.getID() + "-description\" class=\"project-description\">";
			total += project.getMain();

		total += "</div>\n";

	total += "</div>";

	return total;
}

function positionProjects(){
	

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
