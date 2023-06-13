import { IdInputDTO } from '~dto/user-id-input-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';

export class DeleteUserApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: IdInputDTO): Promise<void> {
    const user = await this.userRepository.findById(input.id);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with id ${input.id.value} does not exists.`,
      );
    }

    await this.userRepository.delete(user.getId());
  }
}
