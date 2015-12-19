// JSON: the key is always on the left side and tha value is on the right side.

var silvana = {
	name:"Silvana",
	lastname:"Ramírez",
	age:30, // if using a number or a boolean value linke true or false, therese no need to use ""
	genre:"female",
	country:"Colombia",
	monthBorn:"May",
	dayBorn:18,
	yearBorn:1985,

	education:{
		school:"The English School",
		year:2003
	}
};

// var users{
// 	u1:silvana
// };

console.log(silvana.education.year);