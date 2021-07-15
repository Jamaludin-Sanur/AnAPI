const Schema = require('../schema/CommonClinicSchema');
const SchemaUtility = require('../utilities/SchemaUtility');
const DentalClinicService = require('../services/DentalClinicService');
const VetClinicService = require('../services/VetClinicService');
const USStates = require('us-state-codes');

class CommonClinicService {

    async getAllClinic(searchFilter) {
        try {
            // Validation
            const filter = SchemaUtility.validateSchema(searchFilter, Schema.filterGetAll);

            // Init filter Dental Clinic
            const filterDentalClinic = {};
            if (filter.name) filterDentalClinic.name = filter.name;
            if (filter.availability) filterDentalClinic.availability = filter.availability;
            if (filter.state) {
                // Convert state to state name if possible
                filterDentalClinic.stateName = USStates.getStateNameByStateCode(filter.state) || filter.state;
            }

            // Search Dental Clinic
            const dentalClinicArray = await DentalClinicService.getAllClinic(filterDentalClinic);

            // Init filter Vet Clinic
            const filterVetClinic = {};
            if (filter.name) filterVetClinic.clinicName = filter.name;
            if (filter.availability) filterVetClinic.opening = filter.availability;
            if (filter.state) {
                // Convert state to state code if possible
                filterVetClinic.stateCode = USStates.getStateCodeByStateName(filter.state) || filter.state;
            }

            // Search Vet Clinic
            const vetClinicArray = await VetClinicService.getAllClinic(filterVetClinic);

            const result = dentalClinicArray.concat(vetClinicArray);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new CommonClinicService();
