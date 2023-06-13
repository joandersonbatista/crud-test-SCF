import { User } from '~entity/user';

import { IdGeneratorProtocol } from '~domain-protocol/id-generator-protocol';

import { CreateUserInputDTO } from '~dto/create-user-input-dto';
import { GetUserOutputDTO } from '~dto/get-user-output-dto';

import { UserRepository } from '~repository/user-repository';

import { ExistsError } from '~error/exists-error';

export class CreateUserApplication {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly idGenerator: IdGeneratorProtocol,
  ) {}

  async execute(input: CreateUserInputDTO): Promise<GetUserOutputDTO> {
    const user = await this.userRepository.findByName(input.name);

    if (user) {
      throw new ExistsError(
        'username_already_exists',
        `username with name ${input.name.value} already exists`,
      );
    }

    const newUser = new User(
      this.idGenerator.generate(),
      input.name,
      input.job,
      input.admin,
      0,
      new Date(),
    );

    await this.userRepository.create(newUser);

    return new GetUserOutputDTO(
      newUser.getId().value,
      newUser.getName().value,
      newUser.getJob(),
      newUser.getReadManyTimes(),
      newUser.isAdmin(),
      newUser.getCreatedAt(),
      newUser.getUpdatedAt(),
    );
  }
}
