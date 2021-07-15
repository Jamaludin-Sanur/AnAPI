const Joi = require('@hapi/joi');

exports.filterGetAll = Joi.object({
	name: Joi.string().trim().empty('').optional(),
    state: Joi.string().trim().empty('').optional(),
    availability: Joi.string().trim().empty('').optional().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
});
