import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { compareSync } from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }

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
