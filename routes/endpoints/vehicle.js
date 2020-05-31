import VehicleModel from '../../model/vehicle';

const get = async (request, response) => {
    console.log('vehicle.get: ' + JSON.stringify(request.body));

    VehicleModel.find((error, items) => {
        if (err) {
            console.log(error);
            response.status(500);
        } else {
            console.log('vehicle.get: ' + JSON.stringify(items));
            response.json(items);
        }
    });
};

const add = async (request, response) => {
    console.log(`vehicle.add: ${JSON.stringify(request.body)}`);

    let model = new VehicleModel(request.body);
    model.save()
        .then(entity => {
            response.status(200).json({
                '_id': entity._id + ' was added'
            });
        })
        .catch(err => {
            response.status(400).send('Add failed : ' + err);
        })
};

const clearAll = async (request, response) => {
    console.log(`vehicle.clearAll`);

    VehicleModel.deleteMany({}, err => {
        if (err) {
            console.log(err);
            response.status(500);
        } else {
            response.send('Completed');
        }

    })
}

export default { get, add, clearAll };