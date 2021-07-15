/* eslint-disable no-console */
const ServerConfig = require('../config/ServerConfig');
const Message = require('../entities/Message');
const MESSAGE_TYPE = require('../constants/MESSAGE_TYPE');

exports.sendSuccess = function (req, res, next) {
	try {
		const data = res.locals.result;
		const message = new Message(MESSAGE_TYPE.SUCCESS, data);
		res.json(message);

		if (ServerConfig.DEBUG_SERVER) {
			console.log('');
			console.log('Response send');
			console.log(message);
		}
	} catch (err) {
		next(err);
	}
};

// eslint-disable-next-line consistent-return
exports.sendError = function sendError(err, req, res, next) {
	try {
		if (res.headersSent) {
			return next(err);
		}

		// Prevent circular
		const errorString = JSON.stringify(err, Object.getOwnPropertyNames(err));
		const errorNotCircular = JSON.parse(errorString);

		// Set result message
		const msg = new Message(MESSAGE_TYPE.ERROR, errorNotCircular);
		res.json(msg);

		if (ServerConfig.DEBUG_SERVER) {
			console.log('');
			console.log('Response Error :');
			console.log(err);
		}
	} catch (error) {
		console.error("Fatal Error in 'sendError'", error);
		next(error);
	}
};
