import { Router } from 'express';

import useUser from '~factory/user';

import { expressRouteAdapter } from '../adapters/express-router-adapter';

export const userRoutes = Router();
const { userController } = useUser();

userRoutes.post('/', expressRouteAdapter(userController.create));
userRoutes.delete('/login', expressRouteAdapter(userController.delete));
userRoutes.get('/', expressRouteAdapter(userController.get));
userRoutes.get('/all', expressRouteAdapter(userController.getAll));
userRoutes.put('/', expressRouteAdapter(userController.update));
