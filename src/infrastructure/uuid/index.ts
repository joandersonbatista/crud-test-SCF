import { v4 as uuidV4 } from 'uuid';

import { Id } from '~value-object/id';

import { IdGeneratorProtocol } from '~domain-protocol/id-generator-protocol';

export class UuidV4 implements IdGeneratorProtocol {
  generate(): Id {
    return new Id(uuidV4());
  }
}
