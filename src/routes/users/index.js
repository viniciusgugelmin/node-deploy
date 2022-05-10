import { Router } from "express";
import UsersController from "../../controllers/users/usersController.js";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", usersController.index);
usersRouter.post("/", usersController.create);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;
