import express from 'express';

import health from './endpoints/health';
import vehicle from './endpoints/vehicle';
import position from './endpoints/position';
import deviceLastState from './endpoints/deviceLastState';

const router = express.Router();



router.route('/health').get(health.get);

router.route('/vehicle/get').get(vehicle.get);
router.route('/vehicle/add').post(vehicle.add);
router.route('/vehicle/clearAll').get(vehicle.clearAll);

router.route('/position/get').get(position.get);
router.route('/position/add').post(position.add);
router.route('/position/clearAll').get(position.clearAll);

// router.route('/lastState/get').get(deviceLastState.get);
// router.route('/lastState/find/:id').get(deviceLastState.find);



export default router;