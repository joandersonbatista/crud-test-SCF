import { CreateUserApplication } from '~application/create-user.application';
import { DeleteUserApplication } from '~application/delete-user.application';
import { GetUserApplication } from '~application/get-user.application';
import { GetUsersApplication } from '~application/get-users.application';
import { UpdateUserApplication } from '~application/update-user.application';

import { UserController } from '~controller/user-controller';

import { CreatedResponse } from '~response/created-response';
import { SuccessResponse } from '~response/success-response';
import { UpdatedResponse } from '~response/updated-response';

import { UserRepositoryFake } from '../database/repositories/user-repository';
import { JsonWebToken } from '../json-web-token';
import { UuidV4 } from '../uuid';

export default () => {
  const userRepository = new UserRepositoryFake();
  const idGenerator = new UuidV4();
  const tokenJwt = new JsonWebToken();

  // aplications
  const createUserApplication = new CreateUserApplication(
    userRepository,
    idGenerator,
  );
  const deleteUserApplication = new DeleteUserApplication(userRepository);
  const updateUserApplication = new UpdateUserApplication(userRepository);
  const getUserApplication = new GetUserApplication(userRepository);
  const getUsersApplication = new GetUsersApplication(userRepository);
  // responses
  const createdResponse = new CreatedResponse();
  const updatedResponse = new UpdatedResponse();
  const successResponse = new SuccessResponse();
  //controller
  const userController = new UserController(
    createUserApplication,
    updateUserApplication,
    getUserApplication,
    getUsersApplication,
    deleteUserApplication,
    createdResponse,
    updatedResponse,
    successResponse,
  );

  return { userController };
};
