import connectMongoDB from "../../app/mongoDatabase.js";
import UsersRepository from "../../repositories/UsersRepository.js";

export default class CreateUserService {
  async execute(user) {
    const usersRepository = new UsersRepository();

    const { db } = await connectMongoDB();

    const { insertedId } = await db
      .collection(usersRepository.collection)
      .insertOne({ ...user });

    return { _id: insertedId, ...user };
  }
}
