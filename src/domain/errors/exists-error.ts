import { DefaultApplicationError } from '~error/default-application-error';

export class ExistsError extends DefaultApplicationError {
  statusCode = 409;
  name = 'ExistsError';
}
