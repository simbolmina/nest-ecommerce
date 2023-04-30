import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getAllUser() {
    return [1, 2, 3, 4];
  }
  async createUser(body: any) {
    return body;
  }
  async getUser(id: string) {
    console.log(id);
  }
}

// user.repository.ts
// import { EntityRepository, Repository } from 'typeorm';
// import { User } from './user.entity';
// import { dataSource } from '../../database/dataSource';

// export const UserRepository = dataSource.getRepository(User).extend({
//   async getAllUser() {
//     return [1, 2, 3, 4];
//   },
//   async createUser(body: any) {
//     return body;
//   },
//   async getUser(id: string) {
//     console.log(id);
//   },
// });
