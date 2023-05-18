import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocumento = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
