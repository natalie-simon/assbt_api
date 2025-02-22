import { User } from '../../database/core/user.entity';
import { CreateUserDto } from '../../users/dtos/createuser.dto';

export class FindOneByEmailProviderMock {
  findOneUserByEmailProvider(email: string) {
    return Promise.resolve(new User());
  }
}
