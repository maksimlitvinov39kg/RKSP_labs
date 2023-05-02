import { Injectable } from '@nestjs/common';
import { Facilitie } from 'src/facilities/facilities.entity';
import { Photographer } from 'src/photographers/photographers.entity';
import { Orders } from 'src/orders/orders.entity';

@Injectable()
export class DatasourceService {
  private photographers: Photographer[] = [];
  private facilities: Facilitie[] = [];
  private orders: Orders[] = [];
  
  getOrders(): Orders[]{
    return this.orders;
  }

  getPhotographers(): Photographer[] {
    return this.photographers;
  }
  getFacilitie(): Facilitie[]{
    return this.facilities
  }
}
