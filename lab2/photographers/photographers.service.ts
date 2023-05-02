import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Photographer } from "./photographers.entity";

@Injectable()
export class PhotographersService {

constructor(private readonly datasourceService: DatasourceService) {}

create(phmaker: Photographer) {
    this.datasourceService.getPhotographers().push(phmaker);
    return phmaker;
  }


findOne(id: number) {
    return this.datasourceService
      .getPhotographers()
      .find((phmaker) => phmaker.id === id);
  }
findAll(): Photographer[]{
    return this.datasourceService.getPhotographers()
}
update(id: number, updatedPhotographer: Photographer) {
    const index = this.datasourceService.getPhotographers().findIndex((phmaker) => phmaker.id === id);
    this.datasourceService.getPhotographers()[index] = updatedPhotographer;
    return this.datasourceService.getPhotographers()[index];
  }
  remove(id: number) {
    const index = this.datasourceService.getPhotographers().findIndex((phmaker) => phmaker.id === id);
    this.datasourceService.getPhotographers().splice(index, 1);
    return HttpStatus.OK;
  }


}

