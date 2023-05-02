import { Module } from '@nestjs/common';

import { DatasourceModule } from 'src/datasource/datasource.module';
import { FacilitiesService } from './facilities.service';
import { FacilitiesController } from './facilities.controller';

@Module({
  controllers: [FacilitiesController],
  providers: [FacilitiesService],
  imports :[DatasourceModule],
})
export class FacilitiesModule {}