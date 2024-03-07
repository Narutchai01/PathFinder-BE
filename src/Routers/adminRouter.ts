import express from 'express';

const router = express.Router();


router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});







export default router;