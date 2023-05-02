import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports :[DatasourceModule],
})
export class OrdersModule {}