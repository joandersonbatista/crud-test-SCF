import { Application } from 'express';

import { userRoutes } from '../routes/user';
import { rateLimiter } from './setup-rate-limit';

export const setupRoutes = (app: Application): void => {
  app.use('/user', rateLimiter, userRoutes);
};
