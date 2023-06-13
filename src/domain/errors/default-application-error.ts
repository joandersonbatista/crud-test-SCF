export class DefaultApplicationError extends Error {
  public statusCode = 500;

  constructor(public errorCode: string, message?: string, name?: string) {
    super(message);
    this.message = message || this.name;
    this.name = name || 'DefaultApplicationError';
  }
}
