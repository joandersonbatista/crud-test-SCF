import { Express, Request, Response, NextFunction } from 'express';

import { DefaultApplicationError } from '~error/default-application-error';

import { WinstonLogger } from '../../winston/winston-logger';

export const setupAsyncErrors = (app: Express): void => {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (!error) {
      return next();
    }

    if (!(error instanceof DefaultApplicationError)) {
      WinstonLogger.getInstance().error('unexpected error', error);

      return res.status(500).json({
        error: error.name,
        errorCode: 'server_error',
        message: 'Something went wrong',
        statusCode: 500,
      });
    }

    return res.status(error.statusCode).json({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });
  });
};
