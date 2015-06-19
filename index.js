var cheerio = require('cheerio');
var request = require('request');

module.exports = function (obj, cb) {

	var gallery = obj.gallery;
	var id = obj.id;
	var logging = obj.logging;
	var timeout = obj.timeout;

	var url = 'http://gall.dcinside.com/board/view/?id=' + gallery + '&no=' + id;

	request(url, function (err, response, body) {

		if (!err && response.statusCode == 200) {
			var $ = cheerio.load(body);

			var title = $('.wt_subject dd').text();
			var txt = $('div .s_write table').text();
			var date = $('div .w_top_right b').text();

			var panel = $('div .w_top_left .wt_subject')
							.next()
							.children()
							.filter('dd')
							.nextAll()
							.filter('dd');

			var views = panel.first()
							.text()
							.trim();

			var comments = panel
							.last()
							.text()
							.trim();

			var recUp = $('#recommend_view_up').text(); 
			var recDown = $('#recommend_view_down .t_black').text(); 

			if (title.trim() === '') {
				cb(null);
			} else {

				if (logging) {
					console.log('---');
					console.log('title    : ' + title);
					console.log('txt      : ' + txt);
					console.log('date     : ' + date);
					console.log('views    : ' + views);
					console.log('comments : ' + comments);
					console.log('recUp    : ' + recUp);
					console.log('recDown  : ' + recDown);
					console.log('---');
				}

				cb(null, {
					title: title,
					txt: txt,
					date: new Date(date),
					views: parseInt(views),
					comments: parseInt(comments),
					recUp: parseInt(recUp),
					recDown: parseInt(recDown)
				});
			}
		} else {
			cb(null);
		}

	});

	if (timeout) {
		setTimeout(function () {
			cb(null);
		}, timeout);
	}
}