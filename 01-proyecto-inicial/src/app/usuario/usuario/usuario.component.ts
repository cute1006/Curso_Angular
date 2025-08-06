import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from '../../usuario-falsos';
const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];

  get imagenUsuario() {
    return 'assets/usuarios/'+ this.usuarioSeleccionado.avatar;
  }
  SeleccionarUsuario() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado = USUARIOS_FALSOS[indiceAleatorio];
  }
}
