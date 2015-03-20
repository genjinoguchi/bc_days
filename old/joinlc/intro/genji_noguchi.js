var Person = function(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;

    this.getFirst = function(){ return this.firstName;}
    this.getLast = function(){ return this.lastName;}
    this.getAge = function(){ return this.age;}
    this.getGender = function(){ return this.gender;}
    
}

var people = [];
var john = new Person("John","Doe",15,"male");
var karishma = new Person("Karishma","Maraj",16,"female");
people.push(john);
people.push(karishma);


function doStuff(){
    for(var i=0;i<people.length;i++){
        if(typeof people[i] === "object"){
        	console.log("First Name: " + people[i].getFirst);
        	console.log("Last Name: " + people[i].getLast);
        	console.log("Age: " + people[i].getAge);
        	console.log("Gender: " + people[i].getGender);
        }
    }
}
