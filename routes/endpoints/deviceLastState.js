import Repository from '../../pkg/repository/generic';
import Model from '../../model/devicelastState';


const find = async (request, response) => {
    console.log('deviceLastState.find: ' + request.body);

    Repository.find(Model, request.params.id)
        .then(result => {
            if (!result) {
                response.status(404).send();
            } else if (result.error) {
                response.status(400).send(result.error);
            } else {
                response.status(200).json(result);
            }
        });
};


const get = async (request, response) => {
    console.log('deviceLastState.get');

    await Repository.get(Model).then(result => {
        if (result.error) {
            console.log(`deviceLastState.get failed : ${result.error}`);
            response.status(500);
        }
        else {
            response.json(result);
        }
    });
};

const add = async (request, response) => {
    console.log('deviceLastState.add: ' + request.body);
    request.body.Source = 'DeviceEventService';

    Repository.add(Model, request.body)
        .then(result => {
            if (result.error) {
                response.status(400).send(result.error);
            } else {
                response.status(200).json({ '_id': result._id });
            }
        });
};

const update = async (request, response) => {
    console.log('deviceLastState.update: ' + request.body);

    Repository.update(Model, request.body)
        .then(result => {
            if (!result) {
                response.status(404).send();
            } else if (result.error) {
                response.status(500).send(result.error);
            } else {
                response.status(200).json({ '_id': result._id });
            }
        });
};

const clearAll = async (request, response) => {
    console.log(`deviceLastState.clearAll`);

    Repository.clearAll(Model)
        .then(result => {
            if (result.error) {
                console.log(`deviceLastState.clearAll failed : ${result.error}`);
                response.status(500);
            } else {
                response.status(200).send();
            }
        });
};

export default { find, get, add, update, clearAll };