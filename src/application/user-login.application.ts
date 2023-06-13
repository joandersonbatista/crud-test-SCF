import { TokenJwtProtocol } from '~domain-protocol/token-jwt-protocol';

import { NameInputDTO } from '~dto/name-input-dto';
import { UserLoginOutputDTO } from '~dto/user-login-output-dto';

import { UserRepository } from '~repository/user-repository';

import { NotFoundError } from '~error/not-found-error';

export class UserLoginApplication {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenJwt: TokenJwtProtocol,
  ) {}

  async execute(input: NameInputDTO): Promise<UserLoginOutputDTO> {
    const user = await this.userRepository.findByName(input.name);

    if (!user) {
      throw new NotFoundError(
        'user_not_found',
        `user with name ${input.name.value} does not exists.`,
      );
    }

    return { token: this.tokenJwt.sigin(user.getId()).value };
  }
}
