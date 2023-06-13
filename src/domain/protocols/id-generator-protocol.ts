import { Id } from '~value-object/id';

export interface IdGeneratorProtocol {
  generate(): Id;
}
