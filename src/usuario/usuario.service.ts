import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = {
        ...createUsuarioDto,
        id: Date.now(),
        senha: this.criptografia(createUsuarioDto.senha),
        createDate: new Date(),
        updateDate: new Date(),
      };
      const createdUsuario = new this.usuarioModel(usuario);
      return createdUsuario.save();
    } catch (e) {
      throw e;
    }
  }

  findAll() {
    try {
      return this.usuarioModel.find();
    } catch (error) {
      throw error;
    }
  }

  async findOne(email: string) {
    try {
      return await this.usuarioModel.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    console.log(updateUsuarioDto);
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  criptografia(senha: string) {
    return hashSync(senha, 10);
  }
}
