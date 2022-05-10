import connectMongoDB from "../../app/mongoDatabase.js";
import UsersRepository from "../../repositories/UsersRepository.js";

export default class GetUsersService {
  async execute() {
    const usersRepository = new UsersRepository();

    const { db } = await connectMongoDB();

    return await db.collection(usersRepository.collection).find({}).toArray();
  }
}
