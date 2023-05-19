import { IsEmail, MinLength } from 'class-validator';
import { Role } from 'src/auth/roles/role.enum';

export class CreateUsuarioDto {
  @MinLength(5, { message: 'The user name should be longer than 5 letters' })
  nome: string;
  idade: number;
  @IsEmail()
  email: string;
  @MinLength(5, {
    message: 'A senha do usuário deve conter no minimo 5 caracteres',
  })
  senha: string;
  permissao: Role[];
}
