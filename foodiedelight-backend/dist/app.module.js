"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const app_service_1 = require("./app.service");
const typeormConfig_1 = require("./config/typeormConfig");
const jwt_1 = require("@nestjs/jwt");
const errorHandling_1 = require("./common/errorHandling");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                playground: true,
                driver: apollo_1.ApolloDriver,
                formatError: (error) => {
                    const { message, extensions: { code, exception }, } = error;
                    if (exception) {
                        var { thrownValue } = exception;
                    }
                    return thrownValue ? thrownValue : { message, code };
                },
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '60m' },
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forRootAsync(typeormConfig_1.typeOrmConfigAsync),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            restaurant_module_1.RestaurantModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_FILTER, useClass: errorHandling_1.HttpErrorFilter }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map