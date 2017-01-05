var data = [[1,2,3],[4,5,6][7,8,9]];
var flettenedData = data.reduce((acc, value) => {
	return acc.concat(value);
},[]);

console.log(flettenedData);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce((acc, value) => {
	value.cast.forEach((star) => {
		if(acc.indexOf(star) === -1) {
			acc.push(star);
		}
	});
	return acc;
},[]);

console.log(stars);

var data = [1,2,3,4,"5"];
var sum = data.reduceRight((acc, value, index) => {
	console.log(index);
	return acc + value;
}, 0);

console.log(sum);