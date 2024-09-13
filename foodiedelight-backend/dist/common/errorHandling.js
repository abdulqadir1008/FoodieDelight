"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const errorEnum_1 = require("./errorEnum");
const graphql_1 = require("graphql");
let HttpErrorFilter = class HttpErrorFilter {
    catch(exception, host) {
        const { message, code } = exception;
        ErrorLog(message, code);
    }
};
exports.HttpErrorFilter = HttpErrorFilter;
exports.HttpErrorFilter = HttpErrorFilter = __decorate([
    (0, common_1.Catch)()
], HttpErrorFilter);
const ErrorLog = (message, code) => {
    if (message) {
        if (message === undefined) {
            throw {
                message: "We're experiencing some technical difficulties. Please try again in a few minutes. If the issue persists, please contact our support team.",
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            };
        }
        else {
            throw new graphql_1.GraphQLError(message, { extensions: { message, code } });
        }
    }
    else {
        switch (code) {
            case common_1.HttpStatus.BAD_REQUEST:
            case errorEnum_1.PostgresqlStatus.INVALI_TEXT_REPRESENTATION:
            case errorEnum_1.PostgresqlStatus.BAD_REQUEST:
                throw { message: 'Bad Request', code: common_1.HttpStatus.BAD_REQUEST };
            case common_1.HttpStatus.FORBIDDEN:
                throw { message: 'User Not Allowed', code: common_1.HttpStatus.FORBIDDEN };
            case common_1.HttpStatus.NOT_FOUND:
                throw { message: `Not Found`, code: common_1.HttpStatus.NOT_FOUND };
            case common_1.HttpStatus.CONFLICT:
                throw { message: `Already Exists`, code: common_1.HttpStatus.CONFLICT };
            case common_1.HttpStatus.LENGTH_REQUIRED:
                throw { message: `Can’t be Empty`, code: common_1.HttpStatus.LENGTH_REQUIRED };
            case common_1.HttpStatus.BAD_GATEWAY:
                throw { message: `Bad gate way`, code: common_1.HttpStatus.BAD_GATEWAY };
            case common_1.HttpStatus.METHOD_NOT_ALLOWED:
                throw { message: 'Method Not Allowed', code: code };
            case errorEnum_1.PostgresqlStatus.NOT_NULL_VIOLATION:
                throw {
                    message: 'Not Null Violation',
                    code: common_1.HttpStatus.LENGTH_REQUIRED,
                };
            case errorEnum_1.PostgresqlStatus.UNIQUE_VIOLATION:
                throw { message: 'Unique Data Violation', code: common_1.HttpStatus.CONFLICT };
            default:
                if (message || code)
                    throw {
                        message: 'INTERNAL SERVER ERROR',
                        code: code || common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    };
                throw { message, code };
        }
    }
};
//# sourceMappingURL=errorHandling.js.map