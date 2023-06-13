import { GetUserOutputDTO } from '~dto/get-user-output-dto';
import { NameInputDTO } from '~dto/name-input-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';

export class GetUserApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: NameInputDTO): Promise<GetUserOutputDTO> {
    const user = await this.userRepository.findByName(input.name);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with name ${input.name.value} does not exists.`,
      );
    }

    return new GetUserOutputDTO(
      user.getId().value,
      user.getName().value,
      user.getJob(),
      user.isAdmin(),
      user.getCreatedAt(),
      user.getUpdatedAt(),
    );
  }
}
