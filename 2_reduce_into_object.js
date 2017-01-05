var votes = [
	"angular",
	"angular",
	"react",
	"react",
	"backbone",
	"ember",
	"angular",
	"react",
	"react",
	"vanilla",
	"vue.js",
	"jquery",
	"jquery",
	"lodash"
];

var initialValue = {};

var reducer = (tally, vote) => {
	if(!tally[vote]) {
		tally[vote] = 1;
	} else {
		tally[vote] = tally[vote] + 1;
	}


	return tally;
};

var result = votes.reduce(reducer, initialValue);

console.log(result);