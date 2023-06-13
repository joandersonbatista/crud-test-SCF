import { Token } from '~value-object/token';

import { TokenJwtProtocol } from '~domain-protocol/token-jwt-protocol';

import { CheckUserAuthenticationApplication } from '~application/check-user-authentication.application';
import { IdInputDTO } from '~application/DTOs/user-id-input-dto';

import { AuthRequest } from '~request/auth-request';

import { MethodMiddleware } from '~presentation-interface/method-middleware-interface';

import { UnauthorizedError } from '~error/unauthorized-error';

export class AuthMiddleware {
  constructor(
    private readonly checkUserAuthenticationApplication: CheckUserAuthenticationApplication,
    private readonly tokenJwtProtocol: TokenJwtProtocol,
  ) {}

  auth: MethodMiddleware = async (req: AuthRequest) => {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedError('unauthorized_user', 'login is required');
    }

    const [, token] = authorization.split(/\s+/);

    const newToken = token ? token : authorization;

    const { value: id } = this.tokenJwtProtocol.verify(new Token(newToken));

    await this.checkUserAuthenticationApplication.execute(new IdInputDTO(id));
  };
}
