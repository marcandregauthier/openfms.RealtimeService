import mongoose from 'mongoose';

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

export default mongoose.model('Position', positionSchema);