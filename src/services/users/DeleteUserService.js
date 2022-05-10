import connectMongoDB from "../../app/mongoDatabase.js";
import UsersRepository from "../../repositories/UsersRepository.js";
import AppError from "../../errors/AppError.js";
import { ObjectId } from "mongodb";

export default class DeleteUserService {
  async execute(id) {
    const usersRepository = new UsersRepository();

    const { db } = await connectMongoDB();

    let userId;

    try {
      userId = new ObjectId(id);
    } catch (error) {
      throw new AppError("Invalid user ID", 422);
    }

    const userExists = await db
      .collection(usersRepository.collection)
      .findOne({ _id: userId });

    if (!userExists) {
      throw new AppError("User not found", 404);
    }

    return await db
      .collection(usersRepository.collection)
      .deleteOne({ _id: new ObjectId(id) });
  }
}
