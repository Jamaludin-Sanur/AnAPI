const Joi = require('@hapi/joi');

class SchemaUtility {
	validateSchema(data, schema) {
		if (!data) throw new Error(`'data' is required`);
		if (!schema) throw new Error(`'schema' is required`);
		return Joi.attempt(data, schema,
			{
				allowUnknown: true,
				stripUnknown: true,
			});
	}
}

module.exports = new SchemaUtility();
