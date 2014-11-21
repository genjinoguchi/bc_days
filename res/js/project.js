function Project(name, id, year, month, path, fileType, centerx, centery, thumbnailDescription, mainDescription){
	this.name = name;
	this.id = id;
	this.year = year;
	this.month = month;
	this.path = path;
	this.fileType = fileType;
	this._x = centerx;
	this._y = centery;
	this.stopped = false;
	this.hover = false;
	this.thumbnailDescription = thumbnailDescription;
	this.mainDescription = mainDescription

	this.getName = function(){ return this.name;}
	this.getID = function(){ return this.id;}
	this.getYear = function(){ return this.year;}
	this.getMonth = function(){ return this.month;}
	this.getPath = function(){ return this.path;}
	this.getFileType = function(){ return this.fileType;}
	this.getMain = function(){ return this.mainDescription;}
	this.getX = function(){ return this._x;}
	this.getY = function(){ return this._y;}
	this.setX = function(nx){ this._x = nx;}
	this.setY = function(ny){ this._y = ny}
	this.setHover = function(hover){ this.hover = hover;}
	this.getThumbnailDescription = function(){ return this.thumbnailDescription;}
	this.getMainDescription = function(){ return this.mainDescription;}

	this.hideHoverInfo = function(){
		$("#"+this.getID()+"-thumbnail").velocity({opacity: "0.5"}, 300);
		this.stopped = false;
		this.restoreInfoTags();
	}
	this.showProjectPage = function(){
		$("#"+id+"-description").css("display","block")
	}

	/*
	this.toggleProjectPage = function(){
		$("#"+id+"-description").css("display") === "none" ? this.showProjectPage() : this.hideProjectPage();
	}
	
	this.hideProjectPage = function(){
		$("#"+id+"-description").css("display","none")
	}
	*/
	
}