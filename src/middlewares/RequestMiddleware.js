const ServerConfig = require('../config/ServerConfig');

exports.onRequest = function (req, res, next) {
	try {
		if (ServerConfig.DEBUG_SERVER) {
			console.log('\nRequest received');
			console.log(`url : ${req.originalUrl}`);
			console.log('method :', req.method);
			console.log('query :', req.query);
			console.log('body :', req.body);
		}
		next();
	} catch (err) {
		next(err);
	}
};
