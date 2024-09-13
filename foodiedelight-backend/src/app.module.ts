import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeormConfig';
import { JwtModule } from '@nestjs/jwt';
import { HttpErrorFilter } from './common/errorHandling';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      playground: true,
      driver: ApolloDriver,
      formatError: (error: GraphQLError | any) => {
        const {
          message,
          extensions: { code, exception },
        } = error;
        if (exception) {
          var { thrownValue } = exception;
        }
        return thrownValue ? thrownValue : { message, code };
      },
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({ isGlobal: true }),
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpErrorFilter }],
})
export class AppModule {}
