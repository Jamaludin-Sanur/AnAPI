const MESSAGE_TYPE = require('../constants/MESSAGE_TYPE');

class Message {
	constructor(type, data) {
		if (!MESSAGE_TYPE[type]) throw new Error('Unknown Message type');
		this.type = type;
		this.data = data;
	}
}

module.exports = Message;
