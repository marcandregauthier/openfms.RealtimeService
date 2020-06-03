import express from 'express';

import health from './endpoints/health';
import position from './endpoints/position';
import deviceLastState from './endpoints/deviceLastState';

const router = express.Router();



router.route('/health').get(health.get);

router.route('/position/receive').post(position.receive);

router.route('/deviceLastState/find/:id').get(deviceLastState.find);
router.route('/deviceLastState/get').get(deviceLastState.get);
router.route('/deviceLastState/add').post(deviceLastState.add);
router.route('/deviceLastState/update').post(deviceLastState.update);
router.route('/deviceLastState/clearAll').get(deviceLastState.clearAll);



export default router;