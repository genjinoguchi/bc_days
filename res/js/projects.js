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
		"Blackout",
		""
		);
	Pool3D = new Project("3D Pool", "Pool3D",
		2014, 6,
		"./res/projects/Pool3D/", ".png",
		0, 0,
		"Pool3D",
		""
		);
	StuySciOlyHome = new Project("Stuyvesant Science Olympiad's New Homepage", "StuySciOlyHome",
		2014, 7,
		"./res/projects/StuySciOlyHome/", ".JPG",
		0, 0,
		"SSO Home",
		""
		);
	ZeroPool = new Project("A New Take on 3D Pool", "ZeroPool",
		2014, 8,
		"./res/projects/ZeroPool/",".JPG",
		700,200,
		"ZeroPool",
		""
		);
	Lineless = new Project("A Realtime Line Remover for Restaurants and Delis", "Lineless",
		2014, 8,
		"./res/projects/Lineless/",".png",
		0,0,
		"Lineless",
		""
		);
	KnoKno = new Project("The Ultimate Platform for Informal Learning Opportunities", "KnoKno",
		2014, 8,
		"./res/projects/KnoKno/",".png",
		0,0,
		"KnoKno",
		""
		);

	//projects.push(codeDayJan);
	projects.push(hackNYU);
	projects.push(Pool3D);
	projects.push(StuySciOlyHome);
	projects.push(ZeroPool);
	projects.push(Lineless);
	projects.push(KnoKno);

	var total = "";

	for(var i=0;i<projects.length;i++){

		$("#projects-display").append(addProject(projects[i]));
	}
}
function addProject(project){
	var total = "";
	total += "<li id=\"" + project.getID() + "\" class=\"project\">";
	
		//Thumbnail
		total += "<div id=\""+project.getID()+"-project-icon\" class=\"project-icon shadow-right\""
			total += "style=\"";
			total += "bottom: "+project.getY()+"px;";
			total += "left: "+project.getX()+"px;\"";
			total += ">";

			total += "<img id=\"" + project.getID()+"-thumbnail" + "\" class=\"icon-sm project-icon-thumbnail\" src=\"";
			total += project.getPath() + "thumbnail" + project.getFileType() + "\"";
			//total += "onclick=\""+project.getID()+".toggleProjectPage()\"";
			total += ">\n";

			//Thumbnail Descriptions
			//Bottom icon description
			total += "<div ";
				total += "id=\""+project.getID()+"-thumbnail-description \"";
				total += "class=\"thumbnail-description\">" + "<center>" + project.getThumbnailDescription() + "</center>";
				console.log(project.getThumbnailDescription());
				console.log("html why")
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
			total += project.getMainDescription();

		total += "</div>\n";

	total += "</li>";

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
