
module.exports = {
    find: id => {
        return find(id);
    }
}


let cache = [];
function find(id) {


    return {
        AstusSerialNumber: id,
        Location: 'Montreal, Quebec',
        Speed: Math.random() * 100,
        State: 'Moving'
    };
}

