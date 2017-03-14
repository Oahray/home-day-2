var words = function(str) {
	str = str.split(/\s+/g);
	var tally = {};
	for (var i = 0; i < str.length; i++) {
		if (tally.hasOwnProperty(str[i])) {
			tally[str[i]] += 1;
		}
		else {
			tally[str[i]] = 1;
		}
	}
	return tally;
};

module.exports = words;