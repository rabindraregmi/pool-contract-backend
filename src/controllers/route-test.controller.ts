import { NextFunction, Request, Response } from 'express';

class RouteTestController {

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public testCallback = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: { status: string } = {status: "Success"}

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

  public callback = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const num = Math.floor(Math.random() * 2);
    if (num === 1) {
      next(new Error(`${num} test error`));
    } else {
      res.status(201).json({ status: 'Ok' });
    }
  };
}

export default RouteTestController;
