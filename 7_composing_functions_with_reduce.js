var increment = (input) => input + 1;
var decrement = (input) => input - 1;
var double = (input) => input * 2;
var halve = (input) => input / 2;

var initial_value = 1;

var pipeline = [
	increment,
	increment,
	increment,
	double,
	increment,
	increment,
	halve
];

var final_value = pipeline.reduceRight((acc, fn) => {
		return fn(acc);
}, initial_value);


console.log(final_value);