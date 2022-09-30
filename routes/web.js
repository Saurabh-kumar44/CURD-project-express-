import express from 'express';
const app = express();
var router = express.Router();

// Loading middleware(urlencoded) which is used to parse incomming requests
router.use(express.urlencoded({ extended: false} ));

import {studentController} from '../controllers/studentController';

router.get('/',studentController.getAllDoc);
router.post('/',studentController.createDoc);
router.get('/edit/:id',studentController.editDoc);
router.post('/update/:id',studentController.updateDocById);
router.post('/delete/:id',studentController.deleteDocById);



export default router;