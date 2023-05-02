import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

@Get()
  findAll() {
    return this.ordersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrder: Orders) {
    return this.ordersService.update(+id, updateOrder);
  }
  @Post()
  create(@Body() createOrder: Orders) {
    return this.ordersService.create(createOrder);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }



}