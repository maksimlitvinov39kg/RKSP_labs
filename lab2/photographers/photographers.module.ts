import { Module } from '@nestjs/common';
import { PhotographersController } from './photographers.controller';
import { PhotographersService } from './photographers.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [PhotographersController],
  providers: [PhotographersService],
  imports :[DatasourceModule],
})
export class PhotographersModule {}
