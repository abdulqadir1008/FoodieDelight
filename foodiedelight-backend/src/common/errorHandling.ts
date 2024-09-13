import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PostgresqlStatus } from './errorEnum';
import { GraphQLError } from 'graphql';
@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const { message, code } = exception;
    ErrorLog(message, code);
  }
}
const ErrorLog = (message: string, code: any) => {
  if (message) {
    if (message === undefined) {
      throw {
        message:
          "We're experiencing some technical difficulties. Please try again in a few minutes. If the issue persists, please contact our support team.",
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    } else {
      throw new GraphQLError(message, { extensions: { message, code } });
    }
  } else {
    switch (code) {
      case HttpStatus.BAD_REQUEST:
      case PostgresqlStatus.INVALI_TEXT_REPRESENTATION:
      case PostgresqlStatus.BAD_REQUEST:
        throw { message: 'Bad Request', code: HttpStatus.BAD_REQUEST };
      case HttpStatus.FORBIDDEN:
        throw { message: 'User Not Allowed', code: HttpStatus.FORBIDDEN };
      case HttpStatus.NOT_FOUND:
        throw { message: `Not Found`, code: HttpStatus.NOT_FOUND };
      case HttpStatus.CONFLICT:
        throw { message: `Already Exists`, code: HttpStatus.CONFLICT };
      case HttpStatus.LENGTH_REQUIRED:
        throw { message: `Can’t be Empty`, code: HttpStatus.LENGTH_REQUIRED };
      case HttpStatus.BAD_GATEWAY:
        throw { message: `Bad gate way`, code: HttpStatus.BAD_GATEWAY };
      case HttpStatus.METHOD_NOT_ALLOWED:
        throw { message: 'Method Not Allowed', code: code };
      case PostgresqlStatus.NOT_NULL_VIOLATION:
        throw {
          message: 'Not Null Violation',
          code: HttpStatus.LENGTH_REQUIRED,
        };
      case PostgresqlStatus.UNIQUE_VIOLATION:
        throw { message: 'Unique Data Violation', code: HttpStatus.CONFLICT };
      default:
        if (message || code)
          throw {
            message: 'INTERNAL SERVER ERROR',
            code: code || HttpStatus.INTERNAL_SERVER_ERROR,
          };
        throw { message, code };
    }
  }
};
