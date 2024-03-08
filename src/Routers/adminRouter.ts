import express from 'express';
import { addJob } from '../Controller/Admin/Job/addJob';
import { getJob } from '../Controller/Admin/Job/GetJob';
import { Editejob } from '../Controller/Admin/Job/Editejob';

const router = express.Router();


router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});

// job router
router.post("/job/addjob",addJob);
router.get("/job/getjob",getJob);
router.put("/job/editjob/:jobid",Editejob);





export default router;