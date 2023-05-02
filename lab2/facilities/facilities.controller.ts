
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Facilitie } from './facilities.entity';
import { FacilitiesService } from './facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitieService: FacilitiesService) {}

@Get()
  findAll() {
    return this.facilitieService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilitieService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFacilitie: Facilitie) {
    return this.facilitieService.update(+id, updateFacilitie);
  }
  @Post()
  create(@Body() createFacilitie: Facilitie) {
    return this.facilitieService.create(createFacilitie);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilitieService.remove(+id);
  }



}