import { Component,computed,Input,signal } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  @Input() avatar!: string;
  @Input() nombre!: string;
  
  SeleccionarUsuario() {

  }
}
