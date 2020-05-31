import mongoose from 'mongoose';

const lastStateSchema = new mongoose.Schema({
    vehicleName:{type: String},
    longitude:  {type: Number},
    latitude:   {type: Number},
    Heading:    {type: Number},
    Speed:      {type: Number}
});

export default mongoose.model('LastState', lastStateSchema);