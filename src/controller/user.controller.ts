import { dataSource } from '../model/data-source';
import { User } from '../model/entities/user';

export class UsersController {
  async getUsers(req, res) {
    const usersRepository = dataSource.getRepository(User);
    const users = await usersRepository.find();
    return res.json({ users });
  }
}
