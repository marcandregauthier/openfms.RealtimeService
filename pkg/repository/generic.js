const find = async (Model, id) => {
    console.log(`repository.find: ${id}`);

    return await Model.findById(id, (error, entity) => {
        if (error) {
            return { error };
        } else {
            return entity;
        }
    });
};


const get = async (Model) => {
    console.log('repository.get');

    return await Model.find((error, items) => {
        if (error) {
            return { error: error };
        } else {
            return items;
        }
    });
};

const add = async (Model, jsonEntity) => {
    console.log(`repository.add: ${jsonEntity}`);

    const Now = new Date();
    jsonEntity.device.CreatedDate = Now;
    jsonEntity.position.CreatedDate = Now;
    if (!jsonEntity.Source) {
        const ProcessName = require('../../package.json').name;
        jsonEntity.device.Source = ProcessName;
        jsonEntity.position.Source = ProcessName;
    }

    let model = new Model(jsonEntity);
    return await model.save()
        .then(entity => {
            return entity;
        })
        .catch(error => {
            return { error: error };
        });
};

const update = async (Model, jsonEntity) => {
    console.log(`repository.update: ${jsonEntity}`);

    const Now = new Date();
    jsonEntity.device.CreatedDate = Now;
    jsonEntity.position.CreatedDate = Now;
    if (!jsonEntity.Source) {
        const ProcessName = require('../../package.json').name;
        jsonEntity.device.Source = ProcessName;
        jsonEntity.position.Source = ProcessName;
    }

    return await Model.findOneAndUpdate({ "_id": jsonEntity._id }, jsonEntity, { new: true });
};

const clearAll = async (Model) => {
    console.log(`repository.clearAll`);

    return await Model.deleteMany({}, error => {
        if (error) {
            console.log(`repository.clearAll: ${error}`);
            return { error: error };
        } else {
            return null;
        }

    });
};

export default { find, get, add, update, clearAll };