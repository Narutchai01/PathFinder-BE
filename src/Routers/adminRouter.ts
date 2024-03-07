import express from 'express';
import { addJob } from '../Controller/Admin/Job/addJob';
import { getJob } from '../Controller/Admin/Job/GetJob';

const router = express.Router();


router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});

// job router
router.post("/job",addJob);
router.get("/job",getJob);





export default router;