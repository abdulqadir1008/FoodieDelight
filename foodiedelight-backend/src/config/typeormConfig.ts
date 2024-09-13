import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Restaurant } from 'src/tables/Restaurant';

export default class TypeOrmConfigPg {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      database: configService.getOrThrow('DB_NAME'),
      host: configService.getOrThrow('DB_HOST'),
      username: configService.getOrThrow('DB_USERNAME'),
      password: configService.getOrThrow('DB_PASSWORD'),
      port: configService.getOrThrow('DB_PORT'),
      schema: configService.getOrThrow('DB_SCHEMA'),
      entities: [Restaurant],
      synchronize: configService.get('TYPEORM_SYNC') === 'true',
    };
  }
}
export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> =>
    TypeOrmConfigPg.getOrmConfig(configService),
  inject: [ConfigService],
};
