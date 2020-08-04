import express from 'express';
import ClassesControllerer from './Controller/ClassesController';
import ConnectionsController from './Controller/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesControllerer();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;
