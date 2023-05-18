import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hashAsync } from 'bcrypt';

export type UsuarioDocumento = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop()
  nome: string;
  @Prop()
  senha: string;
  @Prop()
  createdat: string;
  @Prop()
  updatedat: string;
  @Prop()
  idade: number;

  @Prop()
  email: string;

  criptografia() {
    this.senha = hashAsync(this.senha, 10);
  }
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
