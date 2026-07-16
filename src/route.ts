import { Router, Request, Response } from "express";

const router = Router();

router.get("/first", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok and running" });
});

export default router;
