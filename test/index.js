var dc = require('..');

dc({
    gallery: 'sejong',
    id: 1,
    logging: true
}, function (err,data) {
	console.log(data);
});