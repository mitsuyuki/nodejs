import { Module } from '@nestjs/common';
import { DriverModule } from './modules/driver/driver.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSchema } from './schemas/driver.schema';
import { AppConfigService } from './shared/app-config/app-config.service';
import { AppConfigModule } from './shared/app-config/app-config.module';
import { CarModule } from './modules/car/car.module';
import { CarSchema } from './schemas/car.schema';
import { UserModule } from './modules/user/user.module';
import { UserSchema } from './schemas/user.schema';
import { HashingModule } from './shared/hashing/hashing.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: parseInt(config.get('DB_PORT')),
        database: config.get('DB_NAME'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        entities: [
          DriverSchema,
          CarSchema,
          UserSchema
        ]
      })
    }),
    DriverModule,
    CarModule,
    UserModule,
    HashingModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
