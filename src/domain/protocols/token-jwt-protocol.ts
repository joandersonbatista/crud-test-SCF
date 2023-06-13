import { Id } from '~value-object/id';
import { Token } from '~value-object/token';

export interface TokenJwtProtocol {
  verify(token: Token): Id;
  sigin(id: Id): Token;
}
