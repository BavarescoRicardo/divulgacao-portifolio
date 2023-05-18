import { PartialType } from '@nestjs/mapped-types';
import { CreateArtigoDto } from './create-artigo.dto';

export class UpdateArtigoDto extends PartialType(CreateArtigoDto) {}
