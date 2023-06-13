import { sign, verify, JwtPayload } from 'jsonwebtoken';

import { Id } from '~value-object/id';
import { Token } from '~value-object/token';

import { TokenJwtProtocol } from '~domain-protocol/token-jwt-protocol';

export class JsonWebToken implements TokenJwtProtocol {
  verify(token: Token): Id {
    const { id } = verify(token.value, process.env.TOKEN_SECRET!) as JwtPayload;

    return new Id(id);
  }

  sigin(id: Id): Token {
    const token = sign({ id: id.value }, process.env.TOKEN_SECRET!, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return new Token(token);
  }
}
