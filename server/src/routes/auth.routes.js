import { Router } from "express";
import {
  login,
  logout,
  profile,
  registry,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/registry", registry);
router.post("/login", login);
router.post("/logout", logout);
router.post("/profile", authRequired, profile);

export default router;
