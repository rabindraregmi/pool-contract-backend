import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PoolController from '@/controllers/pool.controller';



class PoolRoute implements Routes {
  public path = '/v1/pool';
  public router = Router();
  public poolController = new PoolController();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/deposits`, this.poolController.getAllDepositList);
    this.router.get(`${this.path}/:wallet/deposits`, this.poolController.getUserDepositList);
    this.router.get(`${this.path}/:wallet/borrows`, this.poolController.getUserBorrowList);
    this.router.get(`${this.path}/borrows`, this.poolController.getAllBorrowList);
    this.router.get(`${this.path}/trend`, this.poolController.getSystemTrend);
    this.router.get(`${this.path}/:wallet/trend`, this.poolController.getUserTrend);

 
  }
}

export default PoolRoute;
