import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.confere';
import { RolesGuard } from 'src/auth/roles/roles.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usuarioService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('admin')
  onlyAdmin(@Req() req) {
    return req.user;
  }

  @Roles(Role.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('user')
  onlyUser(@Req() req) {
    return req.user;
  }
}
