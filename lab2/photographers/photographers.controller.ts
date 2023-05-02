import { PhotographersService } from 'src/photographers/photographers.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Photographer } from './photographers.entity';

@Controller('photographers')
export class PhotographersController {
  constructor(private readonly photographersService: PhotographersService) {}

@Get()
  findAll() {
    return this.photographersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photographersService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhmaker: Photographer) {
    return this.photographersService.update(+id, updatePhmaker);
  }
  @Post()
  create(@Body() craetePhmaker: Photographer) {
    return this.photographersService.create(craetePhmaker);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photographersService.remove(+id);
  }



}