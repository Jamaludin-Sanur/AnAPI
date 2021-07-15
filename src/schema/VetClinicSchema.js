const Joi = require('@hapi/joi');

exports.filterGetAll = Joi.object({
	clinicName: Joi.string().trim().empty('').optional(),
    stateCode: Joi.string().trim().empty('').optional(),
    opening: Joi.string().trim().empty('').optional().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
});
