import { Router } from 'express';
import ExampleController from './app/controllers/ExampleController';

const routes = Router();

routes.route('/').get(ExampleController.index);

export default routes;
