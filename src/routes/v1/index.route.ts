import { Router } from 'express';
import RouteTestController from '@controllers/route-test.controller';
import { Routes } from '@interfaces/routes.interface';

class IndexRoute implements Routes {
  public path = '/test/';
  public router = Router();
  public testController = new RouteTestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/`, this.testController.index);
    this.router.get(`/v1${this.path}`, this.testController.testCallback);
    this.router.get(`/v1${this.path}callback`, this.testController.callback);
  }
}

export default IndexRoute;
