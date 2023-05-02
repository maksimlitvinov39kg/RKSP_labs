import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Facilitie } from "src/facilities/facilities.entity";

@Injectable()
export class FacilitiesService {

constructor(private readonly datasourceService: DatasourceService) {}

create(facilitie: Facilitie) {
    this.datasourceService.getFacilitie().push(facilitie);
    return facilitie;
  }


findOne(id: number) {
    return this.datasourceService.getFacilitie().find((facilities) => facilities.id === id);
  }
findAll(): Facilitie[]{
    return this.datasourceService.getFacilitie()
}
update(id: number, updatedFacilitie: Facilitie) {
    const index = this.datasourceService.getFacilitie().findIndex((facilitie) => facilitie.id === id);
    this.datasourceService.getFacilitie()[index] = updatedFacilitie;
    return this.datasourceService.getFacilitie()[index];
  }
  remove(id: number) {
    const index = this.datasourceService.getFacilitie().findIndex((facilitie) => facilitie.id === id);
    this.datasourceService.getFacilitie().splice(index, 1);
    return HttpStatus.OK;
  }


}

