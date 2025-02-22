import { User } from "../../database/core/user.entity";
import { CreateUserDto } from "../../users/dtos/createuser.dto";

export class CreateUserProviderMock {
  createUser(dto: CreateUserDto) {
    return Promise.resolve(new User());
  }
}
