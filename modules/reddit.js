
var Snoocore = require('snoocore');
var reddit = new Snoocore({
  userAgent: '/u/bottymcbotbotbot myApp@3.0.0',
  oauth: {
  	type: 'script',
    key: 'Kxq-nB2f5iVAqQ', 
    secret: 'Yyh5lC2mNGHb7FxFHrUeZ2GqKy8',
    username: 'bottymcbotbotbot', 
    password: 'hellothere',
    scope: [ 'identity', 'read', 'vote' ]
	}
});

function compactResults(results) {
	var compacted = [];

	results.data.children.forEach(function(element) {
		var data = element.data;
		compacted.push({title: data.title, url: data.url})
	});

	return compacted;
}

exports.test = function() {
	reddit('/api/v1/me').get().then(function(result) {console.log(result)});
}

exports.search = function(query, res) {
	reddit('/r/all/search').get({q: query, limit: 10}).then(function(result) {
		var compacted = compactResults(result);
		res.send(compacted);
	});
}

