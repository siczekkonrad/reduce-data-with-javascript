var data = ["vote1", "vote2", "vote1", "vote2"];

var reducer = (accumulator, value) => { //this function counting same votes
	if(accumulator[value]) {
		accumulator[value] += 1;
	} else {
		accumulator[value] = 1;
	}

	return accumulator; // its very important to return accumulator, cause it has value to return and calculate
}


var tally = data.reduce(reducer, {}); 

console.log(tally);