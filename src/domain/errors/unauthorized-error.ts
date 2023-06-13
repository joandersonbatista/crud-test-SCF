import { DefaultApplicationError } from '~error/default-application-error';

export class UnauthorizedError extends DefaultApplicationError {
  name = 'UnauthorizedError';
  statusCode = 401;
}
