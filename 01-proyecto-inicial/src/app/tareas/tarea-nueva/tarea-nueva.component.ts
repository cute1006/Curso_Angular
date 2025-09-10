import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tarea-nueva',
  standalone: true,
  imports: [],
  templateUrl: './tarea-nueva.component.html',
  styleUrl: './tarea-nueva.component.css'
})
export class TareaNuevaComponent {

 @Output() cerrar = new EventEmitter<boolean>();

 cerrarFormulario() {
  this.cerrar.emit(true);
  }
}
