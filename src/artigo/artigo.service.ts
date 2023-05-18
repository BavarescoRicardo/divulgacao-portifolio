import { Injectable } from '@nestjs/common';
import { CreateArtigoDto } from './dto/create-artigo.dto';
import { UpdateArtigoDto } from './dto/update-artigo.dto';

@Injectable()
export class ArtigoService {
  create(createArtigoDto: CreateArtigoDto) {
    return 'This action adds a new artigo';
  }

  findAll() {
    return `This action returns all artigo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artigo`;
  }

  update(id: number, updateArtigoDto: UpdateArtigoDto) {
    return `This action updates a #${id} artigo`;
  }

  remove(id: number) {
    return `This action removes a #${id} artigo`;
  }
}
