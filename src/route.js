import { Router } from "express";

const router = Router();


router.get("/first", (req, res) => {



    res.status(200).json({ status: "ok and running" });
});


export default router;