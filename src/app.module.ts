import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtigoModule } from './artigo/artigo.module';
import { ParticipanteModule } from './participante/participante.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [ArtigoModule, ParticipanteModule, UsuarioModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
