import httpStatus from 'http-status';
import { HttpException } from './HttpException';

const RaiseBadRequest = (message = 'Bad Request') => {
  throw new HttpException(httpStatus.BAD_REQUEST, message);
};

const RaiseEmptyPayload = () => {
  return RaiseBadRequest('Empty Payload');
};

export { RaiseEmptyPayload, RaiseBadRequest };
