import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router();

router.get('/', indexCtrl.JobHstCtrl.findAll);
router.get('/:id', indexCtrl.JobHstCtrl.findOne);
router.post('/', indexCtrl.JobHstCtrl.create);
router.put('/:id', indexCtrl.JobHstCtrl.update);
router.delete('/:id', indexCtrl.JobHstCtrl.deleted);
router.get('/sql/:id', indexCtrl.JobHstCtrl.querySQL);
export default router;