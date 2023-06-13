import { UpdateUserInputDTO } from '~dto/update-user-input-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';

export class UpdateUserApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: UpdateUserInputDTO): Promise<void> {
    const user = await this.userRepository.findById(input.id);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with id ${input.id.value} does not exists.`,
      );
    }

    if (input.name) user.changeName(input.name);
    if (input.job) user.changeJob(input.job);

    await this.userRepository.update(user);
  }
}
