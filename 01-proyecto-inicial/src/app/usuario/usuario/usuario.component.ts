import { Component,computed,EventEmitter,input,Input,Output,signal } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
 
  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) nombre!: string;
  @Output() seleccionarUsuario = new EventEmitter();
  //avatar = input.required<string>();
  //nombre = input.required<string>();
  
  get imagenUsuario() {
    
    return 'assets/usuarios/' + this.avatar;
 }
 
  SeleccionarUsuario() {
    this.seleccionarUsuario.emit(this.id);
  }
}
