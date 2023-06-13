import { GetUserOutputDTO } from '~dto/get-user-output-dto';

import { UserRepository } from '~repository/user-repository';

export class GetUsersApplication {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<GetUserOutputDTO[]> {
    const users = await this.userRepository.findAll();

    return users.map(
      (user) =>
        new GetUserOutputDTO(
          user.getId().value,
          user.getName().value,
          user.getJob(),
          user.getReadManyTimes(),
          user.isAdmin(),
          user.getCreatedAt(),
          user.getUpdatedAt(),
        ),
    );
  }
}
