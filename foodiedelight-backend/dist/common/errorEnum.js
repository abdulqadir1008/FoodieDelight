"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E_connections = exports.PostgresqlStatus = void 0;
var PostgresqlStatus;
(function (PostgresqlStatus) {
    PostgresqlStatus["NOT_NULL_VIOLATION"] = "23502";
    PostgresqlStatus["UNIQUE_VIOLATION"] = "23505";
    PostgresqlStatus["INVALI_TEXT_REPRESENTATION"] = "22P02";
    PostgresqlStatus["BAD_REQUEST"] = "2201X";
    PostgresqlStatus["NOT_FOUND"] = "23503";
    PostgresqlStatus["LENGTH_EXCEEDED"] = "22001";
})(PostgresqlStatus || (exports.PostgresqlStatus = PostgresqlStatus = {}));
var E_connections;
(function (E_connections) {
    E_connections["PUBLIC_CONNECTION"] = "publicConnection";
})(E_connections || (exports.E_connections = E_connections = {}));
//# sourceMappingURL=errorEnum.js.map