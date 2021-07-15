const Schema = require('../schema/VetClinicSchema');
const SchemaUtility = require('../utilities/SchemaUtility');
const dataArray = require('../dummyData/vet-clinics.json');
class VetClinicService {

    async getAllClinic(searchFilter) {
        try {
            // Validation
            const filter = SchemaUtility.validateSchema(searchFilter, Schema.filterGetAll);

            // Filter clinic data
            const result = dataArray.filter(data => {

                // Filter by name
                if (filter.clinicName) {
                    const regex = new RegExp(filter.clinicName, 'i');
                    if (data.clinicName.search(regex) < 0) return false;
                }

                // Filter by state name
                if (filter.stateCode) {
                    const regex = new RegExp(`\\b${filter.stateCode}\\b`, 'i');
                    if(data.stateCode.search(regex) < 0) return false;
                }

                // Filter by availability
                if (filter.opening) {
                    // Get total minutes from start opening 
                    const startChunk = data.opening.from.split(":");
                    const startTotalMinutes = parseInt(startChunk[0], 10) * 60 + parseInt(startChunk[1], 10);

                    // Get total minutes from end opening 
                    const endChunk = data.opening.to.split(":");
                    const endTotalMinutes = parseInt(endChunk[0]) * 60 + parseInt(endChunk[1]);

                    // Get total minutes from desired opening
                    const targetChunk = filter.opening.split(":");
                    const targetTotalMinutes = parseInt(targetChunk[0]) * 60 + parseInt(targetChunk[1]);

                    // Check if target is not between start and end 
                    if (!(targetTotalMinutes >= startTotalMinutes && targetTotalMinutes <= endTotalMinutes)) {
                        return false;
                    }
                }

                return true;
            })

            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new VetClinicService();
