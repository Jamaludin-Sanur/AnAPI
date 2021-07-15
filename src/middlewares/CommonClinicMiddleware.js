const CommonClinicService = require('../services/CommonClinicService');

exports.getAllClinic = async function (req, res, next) {
	try {
		// Get result
		const searchFilter = req.query || {};
		const clinicArray = await CommonClinicService.getAllClinic(searchFilter);

		// Set result to response
		const result = { clinicArray };
		res.locals.result = result;
		next();
	} catch (err) {
		next(err);
	}
};