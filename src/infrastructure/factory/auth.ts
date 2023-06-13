/* import { CheckUserCredentialApplication } from '~application/check-user-credential.application';

import { AuthMiddleware } from '~controller/auth-middleware'; */

import { UserRepositoryFake } from '../database/repositories/user-repository';
import { JsonWebToken } from '../json-web-token';

export default () => {
  const userRepository = new UserRepositoryFake();
  /* const tokenJwt = new JsonWebToken();
  //aplication
  const getUserApplication = new CheckUserCredentialApplication(userRepository);
  //middleware
  const authMiddleware = new AuthMiddleware(getUserApplication, tokenJwt);

  return { authMiddleware }; */
};
