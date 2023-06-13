import { Router } from 'express';

import useAuth from '~factory/auth';
import useUser from '~factory/user';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';
import { expressRouteAdapter } from '../adapters/express-router-adapter';

export const userRoutes = Router();
const { userController } = useUser();
const { authMiddleware } = useAuth();

userRoutes.post('/', expressRouteAdapter(userController.create));
userRoutes.post('/login', expressRouteAdapter(userController.login));
userRoutes.get('/', expressRouteAdapter(userController.get));
userRoutes.get('/access', expressRouteAdapter(userController.access));
userRoutes.get('/all', expressRouteAdapter(userController.getAll));
userRoutes.put(
  '/:id',
  expressMiddlewareAdapter(authMiddleware.auth),
  expressRouteAdapter(userController.update),
);
userRoutes.delete(
  '/:id',
  expressMiddlewareAdapter(authMiddleware.auth),
  expressRouteAdapter(userController.delete),
);
