import express from 'express';
import { addJob } from '../Controller/Admin/Job/addJob';
import { getJob } from '../Controller/Admin/Job/GetJob';
import { Editejob } from '../Controller/Admin/Job/Editejob';
import { CreateQuizz } from '../Controller/Admin/Quizz/CreateQuizz';
import { EditQuizz } from '../Controller/Admin/Quizz/EditQuizz';
import { EditChoies } from '../Controller/Admin/Choies/EditChoies';

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


// quizz router
router.post("/quizz/create",CreateQuizz);
router.put("/quizz/editquizz/:quizzID", EditQuizz);

// choise router
router.put("/choise/editchoise/:choiesID", EditChoies);

export default router;