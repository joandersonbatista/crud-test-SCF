import { User } from '~entity/user';

import { Id } from '~value-object/id';
import { Name } from '~value-object/name';

import { UserRepository } from '~application/repositories/user-repository';

import UserModelAttributes from '~infrastructure-interface/user-model-attributes.interface';

import { storage } from '../storage';

export class UserRepositoryFake implements UserRepository {
  public async findByName(name: Name): Promise<User> {
    const user = storage.find((user) => user.name === name.value);

    if (!user) return null;

    return this.fromModelToEntity(user);
  }

  public async findAll(): Promise<User[]> {
    return storage.map((user) => this.fromModelToEntity(user));
  }

  public async create(user: User): Promise<void> {
    storage.push(this.fromEntityToModel(user));
  }

  public async update(user: User): Promise<void> {
    const index = storage.findIndex((value) => value.id === user.getId().value);

    storage[index] = this.fromEntityToModel(user);
  }

  public async findById(id: Id): Promise<User> {
    const user = storage.find((user) => user.id === id.value);

    if (!user) return null;

    return this.fromModelToEntity(user);
  }

  public async delete(id: Id): Promise<void> {
    const index = storage.findIndex((value) => value.id === id.value);

    storage.splice(index, 1);
  }

  private fromEntityToModel(user: User): UserModelAttributes {
    return {
      id: user.getId().value,
      name: user.getName().value,
      job: user.getJob(),
      admin: user.isAdmin(),
      read: user.getReadManyTimes(),
      created_at: user.getCreatedAt(),
      updated_at: user.getUpdatedAt(),
    };
  }

  private fromModelToEntity(user: UserModelAttributes): User {
    return new User(
      new Id(user.id),
      new Name(user.name),
      user.job,
      user.admin,
      user.read,
      user.created_at,
      user.updated_at,
    );
  }
}
