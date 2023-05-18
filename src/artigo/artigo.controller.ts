import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';

@Controller('artigo')
export class ArtigoController {
  constructor(private readonly artigoService: ArtigoService) {}

  @Post()
  create(@Body() createArtigoDto: CreateArtigoDto) {
    return this.artigoService.create(createArtigoDto);
  }

  @Get()
  findAll() {
    return this.artigoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artigoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtigoDto: UpdateArtigoDto) {
    return this.artigoService.update(+id, updateArtigoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artigoService.remove(+id);
  }
}
