import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()

router.post("/tags",ensureAuthenticated,ensureAdmin,createTagController.handle);
router.post("/users",createUserController.handle);
router.post("/login",authenticateUserController.handle);
router.post("/compliments",ensureAuthenticated,complimentController.handle)

export{router};