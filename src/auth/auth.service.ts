import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { compareSync } from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsuarioService) {}

  async validateUser(email: string, senha: string) {
    let user: Usuario;
    try {
      user = await this.userService.findOne(email);

      const senhaCorreta = compareSync(senha, user.senha);
      if (!senhaCorreta) return null;

      return user;
    } catch (error) {
      return null;
    }
  }
}
