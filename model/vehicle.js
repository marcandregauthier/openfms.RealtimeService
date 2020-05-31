import mongoose from 'mongoose';

let vehicleSchema = new mongoose.Schema({
    vehicleName:  {type: String}
});

export default mongoose.model('Vehicle', vehicleSchema);