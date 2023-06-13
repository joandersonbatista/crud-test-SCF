import { GetUserOutputDTO } from '~dto/get-user-output-dto';
import { IdInputDTO } from '~dto/user-id-input-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';
import { UnauthorizedError } from '~error/unauthorized-error';

export class CheckUserAuthenticationApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: IdInputDTO): Promise<GetUserOutputDTO> {
    const user = await this.userRepository.findById(input.id);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with id ${input.id.value} does not exists.`,
      );
    }

    if (!user.isAdmin()) {
      throw new UnauthorizedError(`unauthorized_user`, 'unauthorized user');
    }

    return new GetUserOutputDTO(
      user.getId().value,
      user.getName().value,
      user.getJob(),
      user.getReadManyTimes(),
      user.isAdmin(),
      user.getCreatedAt(),
      user.getUpdatedAt(),
    );
  }
}
