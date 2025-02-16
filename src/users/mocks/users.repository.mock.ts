import { CreateUserDto } from "../dtos/createuser.dto";
import { usersMock } from "./users.mock";

/**
 * Mock du repository des utilisateurs
 */
export const usersMockRepository = {
  find: jest.fn().mockResolvedValue(usersMock),
  create: jest.fn((dto: CreateUserDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity }))
}