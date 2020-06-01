import mongoose from 'mongoose';

// import Device from './device';
// import Position from './position';


let deviceSchema = new mongoose.Schema({
    deviceID:       String,
    vehicleName:    String
});

const positionSchema = new mongoose.Schema({
    DeviceID:    String,
    Location:    String,
    Longitude:   Number,
    Latitude:    Number,
    Heading:     Number,
    Speed:       Number,
    Source:      String,
    CreatedDate: Date
});

const deviceLastStateSchema = new mongoose.Schema({
    device:     deviceSchema,
    position:   positionSchema
});


export default mongoose.model('DeviceLastState', deviceLastStateSchema);