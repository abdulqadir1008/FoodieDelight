"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
const Restaurant_1 = require("../tables/Restaurant");
class TypeOrmConfigPg {
    static getOrmConfig(configService) {
        return {
            name: 'default',
            type: 'postgres',
            database: configService.getOrThrow('DB_NAME'),
            host: configService.getOrThrow('DB_HOST'),
            username: configService.getOrThrow('DB_USERNAME'),
            password: configService.getOrThrow('DB_PASSWORD'),
            port: configService.getOrThrow('DB_PORT'),
            schema: configService.getOrThrow('DB_SCHEMA'),
            entities: [Restaurant_1.Restaurant],
            synchronize: configService.get('TYPEORM_SYNC') === 'true',
        };
    }
}
exports.default = TypeOrmConfigPg;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeOrmConfigPg.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeormConfig.js.map