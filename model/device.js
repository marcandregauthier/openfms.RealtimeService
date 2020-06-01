import mongoose from 'mongoose';

let deviceSchema = new mongoose.Schema({
    deviceID:       String,
    vehicleName:    String
});

export default mongoose.model('Device', deviceSchema);