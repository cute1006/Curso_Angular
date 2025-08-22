import { Component } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { UsuarioComponent } from "./usuario/usuario/usuario.component";
import { USUARIOS_FALSOS } from './usuario-falsos';
import { TareasComponent } from "./tareas/tareas.component";


@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent, UsuarioComponent, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado? : string;

  get usuarioSeleccionado() {
    return this.usuarios.find(usuario => usuario.id === this.idUsuarioSeleccionado)!;
  }
  SeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}
