import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router();

router.get('/', indexCtrl.DptCtrl.findAll);
router.get('/:id', indexCtrl.DptCtrl.findOne);
router.post('/', indexCtrl.DptCtrl.create);
router.put('/:id', indexCtrl.DptCtrl.update);
router.delete('/:id', indexCtrl.DptCtrl.deleted);
router.get('/sql/:id', indexCtrl.DptCtrl.querySQL);
export default router;