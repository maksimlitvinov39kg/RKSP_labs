import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Orders } from "./orders.entity";


@Injectable()
export class OrdersService {

constructor(private readonly datasourceService: DatasourceService) {}

create(ordermaker: Orders) {
    this.datasourceService.getOrders().push(ordermaker);
    return ordermaker;
  }


findOne(id: number) {
    return this.datasourceService
      .getPhotographers()
      .find((ordermaker) => ordermaker.id === id);
  }
findAll(): Orders[]{
    return this.datasourceService.getOrders()
}
update(id: number, updateOrder: Orders) {
    const index = this.datasourceService.getOrders().findIndex((ordermaker) => ordermaker.id === id);
    this.datasourceService.getOrders()[index] = updateOrder;
    return this.datasourceService.getOrders()[index];
  }
  remove(id: number) {
    const index = this.datasourceService.getOrders().findIndex((ordermaker) => ordermaker.id === id);
    this.datasourceService.getOrders().splice(index, 1);
    return HttpStatus.OK;
  }


}

