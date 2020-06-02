import mongoose from 'mongoose';


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
    Speed:       Number
});

const deviceLastStateSchema = new mongoose.Schema({
    device:      deviceSchema,
    position:    positionSchema,
    Source:      String,
    CreatedDate: Date
});


export default mongoose.model('DeviceLastState', deviceLastStateSchema);