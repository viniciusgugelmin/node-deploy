import { v4 as uuid } from "uuid";
import GetUsersService from "../../services/users/GetUsersService.js";
import CreateUserService from "../../services/users/CreateUserService.js";
import DeleteUserService from "../../services/users/DeleteUserService.js";

export default class UsersController {
  async index(req, res, next) {
    try {
      const getUsersService = new GetUsersService();

      const users = await getUsersService.execute();

      res.json([...users]);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const createUserService = new CreateUserService();

      const name = uuid();

      const user = await createUserService.execute({ name });

      res.status(201).json({
        ...user,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteUserService = new DeleteUserService();

      await deleteUserService.execute(id);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}
