import { RequestValidationError } from '~error/request-validation-error';

export class Id {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError(
        'invalid_id',
        'id value should not be empty.',
      );
    }
  }
}
