import { DefaultApplicationError } from '~error/default-application-error';

export class BadRequestError extends DefaultApplicationError {
  name = 'BadRequestError';
  statusCode = 400;
}
