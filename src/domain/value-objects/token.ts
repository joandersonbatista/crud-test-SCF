import { RequestValidationError } from '~error/request-validation-error';

export class Token {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0) {
      throw new RequestValidationError(
        'invalid_token',
        'Token value should not be empty.',
      );
    }
  }
}
