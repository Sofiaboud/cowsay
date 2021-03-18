const object = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `hello my name is ${object.name} from ${object.campus}`,
	e : "oO",
	T : "U "
}));
