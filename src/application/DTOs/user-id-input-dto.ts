import { Id } from '~value-object/id';

export class IdInputDTO {
  public id: Id;

  constructor(id: string) {
    this.id = new Id(id);
  }
}
