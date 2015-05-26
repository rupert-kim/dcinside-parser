var dc = require('..');

dc({
    gallery: 'sejong',
    id: 1,
    logging: true
}, function (data) {
	console.log((data));
});