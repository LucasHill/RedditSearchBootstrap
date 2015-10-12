
var Snoocore = require('snoocore');
var reddit = new Snoocore({
  userAgent: '/u/bottymcbotbotbot myApp@3.0.0', // unique string identifying the app
  oauth: {
  	type: 'script',
    key: 'Kxq-nB2f5iVAqQ', // OAuth client key (provided at reddit app)
    secret: 'Yyh5lC2mNGHb7FxFHrUeZ2GqKy8', // OAuth secret (provided at reddit app)
    username: 'bottymcbotbotbot', // Reddit username used to make the reddit app
    password: 'hellothere', // Reddit password for the username
    // The OAuth scopes that we need to make the calls that we 
    // want. The reddit documentation will specify which scope
    // is needed for evey call
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
	//reddit('/r/all/search').get({q: "donald trump"}).then(function(result) {console.log(result)});
	reddit('/api/v1/me').get().then(function(result) {console.log(result)});
}

exports.search = function(query, res) {
	reddit('/r/all/search').get({q: query, limit: 10}).then(function(result) {
		var compacted = compactResults(result);
		console.log(compacted);
	});
}

