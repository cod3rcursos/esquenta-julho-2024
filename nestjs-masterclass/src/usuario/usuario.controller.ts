import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}

  @Post()
  async criar(@Body() usuario: Usuario) {
    const novoUsuario = await this.repo.criar(usuario);
    return novoUsuario;
  }

  @Get()
  async obterTodos() {
    const usuarios = await this.repo.obterTodos();
    return usuarios;
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() usuario: Usuario) {
    const usuarioAtualizado = await this.repo.atualizar({
      ...usuario,
      id: +id,
    });
    return usuarioAtualizado;
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    const usuario = await this.repo.obterPorId(+id);
    return usuario;
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    await this.repo.deletar(+id);
  }
}
