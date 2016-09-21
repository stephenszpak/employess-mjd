function Employee(x) {
	this.name = "Full Name";
};


function Clinician() {
	this.expertise = "Expertise";
};
Clinician.prototype = new Employee();

let rBobby = new Clinician();
let sBrule = new Clinician();
sBrule.name = "Dr. Steve Brule";
sBrule.expertise = "Surgeon";
rBobby.name = "Ricky Bobby";
rBobby.expertise = "Race Car"


function Operations() {
	this.job = "job";
};
Operations.prototype = new Clinician();

let tBlah = new Operations();
let rogers = new Operations();
tBlah.name = "Ted Blah";
tBlah.job = "IT";
rogers.name = "Mr. Rogers";
rogers.job = "Library";


function Departments() {

};
Departments.prototype = new Employee();

function FieldOffice() {
	this.city = "city";
};
sBrule.city = "Detroit";
tBlah.city = "New York"

FieldOffice.prototype = new Departments();

function Headquarters() {
	this.place = "Headquarters"
};
Headquarters.prototype = new FieldOffice();

rBobby.place = "Headquarters";
rogers.place = "Headquarters"


console.log(rBobby.name + " works as a Clinician, his job is " + rBobby.expertise + " at " + rBobby.place);
console.log(sBrule.name + " works as a Clinician, his job is " + sBrule.expertise + " at " + sBrule.city);
console.log(rogers.name + " works as a Clinician, his job is " + rogers.job + " at " + rogers.place);
console.log(tBlah.name + " works as a Clinician, his job is " + tBlah.job + " at " + tBlah.city);




