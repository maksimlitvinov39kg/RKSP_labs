import { Module } from '@nestjs/common';
import {PhotographersModule} from 'src/photographers/photographers.module'
import { DatasourceModule } from './datasource/datasource.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [PhotographersModule,DatasourceModule,FacilitiesModule,OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
