import { Module } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { ArtigoController } from './artigo.controller';

@Module({
  controllers: [ArtigoController],
  providers: [ArtigoService]
})
export class ArtigoModule {}
