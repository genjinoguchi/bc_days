
var FRICTION = 0.04;

function Project(name, id, year, month, path, fileType, centerx, centery, vx, vy){
	var name, year, month, path, fileType;
	this.name = name;
	this.id = id;
	this.year = year;
	this.month = month;
	this.path = path;
	this.fileType = fileType;
	this._x = centerx;
	this._y = centery;
	this._vx = vx;
	this._vy = vy;

	this.getName = function(){ return name;}
	this.getID = function(){ return id;}
	this.getYear = function(){ return year;}
	this.getMonth = function(){ return month;}
	this.getPath = function(){ return path;}
	this.getFileType = function(){ return fileType;}
	this.getX = function(){ return this._x;}
	this.getY = function(){ return this._y;}
	this.setX = function(nx){ this._x = nx;}
	this.setY = function(ny){ this._y = ny}
	this.getXVel = function(){ return this._vx;}
	this.getYVel = function(){ return this._vy;}
	this.setXVel = function(dvx){ this._vx+=dvx;}
	this.setYVel = function(dvy){ this._vy+=dvy;}
	this.speed = function(){return Math.sqrt(this._vx*this._vx + this._vy*this._vy);}

	this.insertLowPass = function(){ //Simple low pass filter for any float calculation errors.
	    if(Math.abs(this._vx)<0.1){
	    	this._vx=0;
	    }
	    if(Math.abs(this._vy)<0.1){
	      	this._vy=0;
	    }
  	}

	this.insertWallCollisions = function(){
		if(this._x>=$(window).width()-100 || this._x<=110){
		this._vx *= -1;
		}
		if(this._y>=$(window).height()-100 || this._y<=110){
			this._vy *= -1;
		}
	}
	this.insertHoverActions = function(){
		var distSq = ( Math.pow((mouseX-this.getX()),2) + Math.pow((mouseY-this.getY()),2) );
		if( distSq < 10000){
			$("#"+getID+"-thumbnail").velocity({opacity: "0.5"});
		}else{
			//$("#"+getID+"-thumbnail").velocity({opacity; "1"})
		}
	}
	this.insertFriction = function(){
	    this._vx += Math.cos(this.direction())*FRICTION;
	    this._vy += Math.sin(this.direction())*FRICTION;
  	}

  	this.insertForce = function(velocity, angle){
	    var vx = velocity * Math.cos(angle);
	    var vy = velocity * Math.sin(angle);
	    this._vx += vx;
	    this._vy += vy;
  	}

	this.insertBallCollisions = function(){
	    for(var i=0;i<projects.length;i++){
		    if(this.name !== projects[i].getName()){
		        if(this.distance(projects[i])<0){
		    		console.log("hurr");
					var translatedAngle = this.convert2PI(this.absoluteAngle(projects[i]) - this.direction());
					//Rotate such that this ball's direction is 0.
					if(Math.cos(translatedAngle)>0){
						this._x += this.distance(projects[i])*Math.cos(this.absoluteAngle(projects[i])); //distance is less than 0.
						this._y += this.distance(projects[i])*Math.sin(this.absoluteAngle(projects[i]));
						projects[i].insertForce(this.speed()*Math.cos(translatedAngle),this.absoluteAngle(projects[i]));
						this.insertForce(this.speed()*Math.cos(translatedAngle+Math.PI),this.absoluteAngle(projects[i]));

					}
		        }
		    }
	    }
	    
	}

	this.angle = function(x, y){ //Helper function
    	if(x===0){
			if(y>0){
				return Math.PI/2;
			}else{
				return 3*Math.PI/2;
			}
    	}
	    var temp = 0;
	    if(x>=0){
	      	if(y>=0){ //Quadrant 1
	        	return Math.atan(y/x);
	      	}else{ //Quadrant IV
	        	return 2*Math.PI - Math.abs(Math.atan(y/x));
	      	}
	    }else{
	      	if(y>=0){//Quad II
	        	return Math.PI - Math.abs(Math.atan(y/x));
	      	}else{ //Quad III
	        	return Math.PI + Math.abs(Math.atan(y/x));
	      	}
	    }
  	}

  	this.direction = function(){
		return this.angle(this._vx,this._vy);
	}

 	this.absoluteAngle = function(project){ //Angle between two balls
	    var dy = project.getY() - this._y;
	    var dx = project.getX() - this._x;
    	return this.angle(dx, dy);
  	}

  	this.distance = function(project){
    	return Math.sqrt(Math.pow(this._x-project.getX(),2) + Math.pow(this._y-project.getY(),2)) - 200;
  	}

  	this.convert2PI = function(f){ //Convert angles to between 0 and 2PI
	    while(f<0){
	      f+= 2*Math.PI;
	    }
	    while(f>2*Math.PI){
	      f-= 2*Math.PI;
	    }
	    return f;
  	}

  	this.stop = function(){
    	this._vx = 0;
    	this._vy = 0;
  	}

	this.update = function(){
		this.insertLowPass();
		this.setX(this.getX() + this.getXVel());
		this.setY(this.getY() + this.getYVel());

		var element = document.getElementById(id);
		element.style.top = (this.getY()-100).toString()+"px";
		element.style.left = (this.getX()-100).toString()+"px";

		this.insertWallCollisions();
		this.insertBallCollisions();

		//this.insertHoverActions();
	}
	
}
