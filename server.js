﻿import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes/router';
import mongo from './pkg/database/mongo';



const app = express();
app.use(cors());
app.use(bodyParser.json());

// -----------------------------------------------------------
// -----------------------------------------------------------
const database = new mongo();


// -----------------------------------------------------------
// -----------------------------------------------------------
app.use('/', router);

const port = require('./package.json').port;
const webServer = app.listen(port, () => {
    console.log(`${require('./package.json').name}: ${port}`); 
});


// -----------------------------------------------------------
// -----------------------------------------------------------
import wsRouter from './routes/wsRouter';


// -----------------------------------------------------------
// -----------------------------------------------------------
import mq from './pkg/mq/receiver';
//import PositionRepository from './repository/position';

mq.getInstance()
    .then(broker => {
        broker.subscribe('openfms.position', (msg, ack) => {
            //PositionRepository.add(JSON.parse(msg.content.toString()));
            ack();
        });
    });
