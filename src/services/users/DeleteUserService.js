import connectMongoDB from "../../app/mongoDatabase.js";
import UsersRepository from "../../repositories/UsersRepository.js";
import AppError from "../../errors/AppError.js";
import { ObjectId } from "mongodb";

export default class DeleteUserService {
  async execute(id) {
    const usersRepository = new UsersRepository();

    const { db } = await connectMongoDB();

    const userExists = await db
      .collection(usersRepository.collection)
      .findOne({ _id: new ObjectId(id) });

    if (!userExists) {
      throw new AppError("User not found", 404);
    }

    return await db
      .collection(usersRepository.collection)
      .deleteOne({ _id: new ObjectId(id) });
  }
}
