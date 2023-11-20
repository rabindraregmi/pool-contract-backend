import { NextFunction, Request, Response } from 'express';
import PoolService from '@/services/pool.service';
import { HttpException } from '@/exceptions/HttpException';
import httpStatus from 'http-status';

class PoolController {
  private poolService = new PoolService();

  public getUserBorrowList = async (req:Request, res: Response, next: NextFunction) => {
    try {

        const walletAddress = req.params.wallet;

        const list = await this.poolService.fetchUserBorrowList(walletAddress);

        if(!walletAddress) throw new HttpException(httpStatus.BAD_REQUEST, "Wallet Address is required")


        return res.status(200).send({data: list})
    } catch (error) {
      next(error)
    }
  }

  public getAllBorrowList = async (req: Request, res:Response, next: NextFunction) => {
    try {
      const list = await this.poolService.fetchAllBorrowList()

      return res.status(200).send({data: list})
    } catch(error) {
      next(error)
    }
  }


  public getUserDepositList = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const walletAddress = req.params.wallet;

        if(!walletAddress) throw new HttpException(httpStatus.BAD_REQUEST, "Wallet Address is required")

        const list = await this.poolService.fetchUserDeposits(walletAddress)

        return res.status(200).send({data: list})
    } catch(error) {
      next(error)
    }
  }


  public getAllDepositList = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const list = await this.poolService.fetchAllDeposits();

      return res.status(200).send({data: list})
    } catch(error) {
      next(error)
    }
  }


  public getUserTrend = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const walletAddress = req.params.wallet;

      if(!walletAddress) throw new HttpException(httpStatus.BAD_REQUEST, "Wallet Address is required")


      const list = await this.poolService.fetchUserTrend(walletAddress);

      return res.status(200).send({data: list})
    }
    catch(error) {
      next(error)
    }

  }

  public getSystemTrend = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const list = await this.poolService.fetchSystemTrend();

      return res.status(200).send({data: list})
    }
    catch(error) {
      next(error)
    }

  }


}

export default PoolController;
