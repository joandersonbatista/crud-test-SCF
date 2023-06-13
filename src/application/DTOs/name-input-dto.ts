import { Name } from '~value-object/name';

export class NameInputDTO {
  public name: Name;

  constructor(name: string) {
    this.name = new Name(name);
  }
}
