import { Component,computed,EventEmitter,input,Input,Output,signal } from '@angular/core';

interface Usuario {
  id: string;
  avatar: string;
  nombre: string;
}
@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
 
  //usar un solo input de tipo objeto
  @Input({required: true}) usuario!: Usuario;
  //@Input({required: true}) usuario!: {
   // id: string;
    //avatar: string;
    //nombre: string;
  //};
  //@Input({required:true}) id!: string;
  //@Input({required:true}) avatar!: string;
  //@Input({required:true}) nombre!: string;
  @Output() seleccionarUsuario = new EventEmitter();
  //avatar = input.required<string>();
  //nombre = input.required<string>();
  
  get imagenUsuario() {
    
    return 'assets/usuarios/' + this.usuario.avatar;
 }
 
  SeleccionarUsuario() {
    this.seleccionarUsuario.emit(this.usuario.id);
  }
}
