var reverseString = function(word) {
	if (word === "") {
		return null;
	}
	var myRev = word.split("").reverse().join("");
  if (word === myRev) {
  	return true;
  }
  else {
  	return myRev;
  }
};

module.exports = reverseString;