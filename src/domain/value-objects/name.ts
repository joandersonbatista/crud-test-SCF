import { RequestValidationError } from '~error/request-validation-error';

export class Name {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError(
        'invalid_name_value',
        'name value should not be empty.',
      );
    }
  }
}
