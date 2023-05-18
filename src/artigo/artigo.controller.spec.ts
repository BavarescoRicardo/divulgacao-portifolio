import { Test, TestingModule } from '@nestjs/testing';
import { ArtigoController } from './artigo.controller';
import { ArtigoService } from './artigo.service';

describe('ArtigoController', () => {
  let controller: ArtigoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtigoController],
      providers: [ArtigoService],
    }).compile();

    controller = module.get<ArtigoController>(ArtigoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
