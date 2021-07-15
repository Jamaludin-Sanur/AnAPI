const Schema = require('../schema/DentalClinicSchema');
const SchemaUtility = require('../utilities/SchemaUtility');
const dataArray = require('../dummyData/dental-clinics.json');

class DentalClinicService {

	async getAllClinic(searchFilter) {
		try {
			// Validation
			const filter = SchemaUtility.validateSchema(searchFilter, Schema.filterGetAll);

            // Filter clinic data
            const result = dataArray.filter( data => {

                // Filter by name
                if(filter.name ){
                    const regex = new RegExp(filter.name, 'i');
                    if(data.name.search(regex) < 0) return false;
                }

                // Filter by state name
                if(filter.stateName){
                    const regex = new RegExp(`^${filter.stateName}`, 'i');
                    if(data.stateName.search(regex) < 0) return false
                }

                // Filter by availability
                if(filter.availability){
                    // Get total minutes from start availability 
                    const startChunk = data.availability.from.split(":");
                    const startTotalMinutes = parseInt(startChunk[0], 10) * 60 + parseInt(startChunk[1], 10);

                    // Get total minutes from end availability 
                    const endChunk = data.availability.to.split(":");
                    const endTotalMinutes = parseInt(endChunk[0]) * 60 + parseInt(endChunk[1]);

                    // Get total minutes from desired availability
                    const targetChunk = filter.availability.split(":");
                    const targetTotalMinutes = parseInt(targetChunk[0]) * 60 + parseInt(targetChunk[1]);

                    // Check if target is not between start and end 
                    if(!(targetTotalMinutes >= startTotalMinutes && targetTotalMinutes<= endTotalMinutes)){
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

module.exports = new DentalClinicService();
