import { Test, TestingModule } from '@nestjs/testing';
import { ArtigoService } from './artigo.service';

describe('ArtigoService', () => {
  let service: ArtigoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtigoService],
    }).compile();

    service = module.get<ArtigoService>(ArtigoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
