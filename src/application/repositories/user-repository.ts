import { User } from '~entity/user';

import { Id } from '~value-object/id';
import { Name } from '~value-object/name';

export interface UserRepository {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  findById(id: Id): Promise<User | null>;
  findByName(name: Name): Promise<User | null>;
  findAll(): Promise<User[] | []>;
  delete(id: Id): Promise<void>;
}
