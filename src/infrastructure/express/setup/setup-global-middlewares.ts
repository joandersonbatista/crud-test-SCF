import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import expressWinston from 'express-winston';
import helmet from 'helmet';
import winston from 'winston';

export const setupGlobalMiddlewares = (app: Application): void => {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(helmet());
  if (process.env.NODE_ENV === 'production') {
    app.use(
      expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json(),
          winston.format.prettyPrint(),
        ),
      }),
    );

    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
  }
};
