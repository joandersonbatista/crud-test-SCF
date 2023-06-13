import { NameInputDTO } from '~dto/name-input-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';

export class DeleteUserApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: NameInputDTO): Promise<void> {
    const user = await this.userRepository.findByName(input.name);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with name ${input.name.value} does not exists.`,
      );
    }

    await this.userRepository.delete(user.getId());
  }
}
