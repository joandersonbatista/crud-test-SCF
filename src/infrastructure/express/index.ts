import express from 'express';
import http from 'http';

import { WinstonLogger } from '../winston/winston-logger';
import { setupAsyncErrors } from './setup/setup-async-errors';
import { setupGlobalMiddlewares } from './setup/setup-global-middlewares';
import { setupRoutes } from './setup/setup-routes';

export const app = express();
export const server = http.createServer(app);

setupGlobalMiddlewares(app);
setupRoutes(app);
setupAsyncErrors(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  WinstonLogger.getInstance().info(
    `Server listening -> http://localhost:${port}`,
  );
});
