import deviceLastStateCache from '../../pkg/deviceLastStateCache';


const get = async (req, res) => {
    const query =
        `
        SELECT TOP 5 AstusSerialNumber, SKU, FleetOwnerID, CreatedDate, CreatedUser
            FROM Inventory 
            WHERE AstusSerialNumber >= 3100000 AND AstusSerialNumber < 3500000 AND CreatedDate > '2014-10-20' AND FleetOwnerID IS NOT NULL
            ORDER BY FleetOwnerID, CreatedDate
        `;
    
    database.query_list(query, (err, records) => {
        console.log('test 1');
        // if (err != null) {
        //     return next(err);
        // }
        res.send(records);
    });
};

const find = async (req, res) => {
    let id = req.params.id;

    res.send(deviceLastStateCache.find(id));
};


export default { get, find };