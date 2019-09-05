import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.domain';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car])
  ],
  providers: [
    CarService
  ],
  exports: [
    CarService
  ]
})
export class CarModule {}
