import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type infoNuevaTarea } from '../tarea/tarea.model';

@Component({
  selector: 'app-tarea-nueva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-nueva.component.html',
  styleUrl: './tarea-nueva.component.css'
})
export class TareaNuevaComponent {

 @Output() cerrar = new EventEmitter<void>();
 @Output() agregar = new EventEmitter<infoNuevaTarea>();
 tituloIngresado = '';
 resumenIngresado = '';
 fechaExpiraIngresada = '';

 cerrarFormulario() {
  this.cerrar.emit();
  }

  alEnviarFormulario() {
    this.agregar.emit({tituloIngresado: this.tituloIngresado, resumenIngresado: this.resumenIngresado, fechaExpiraIngresada: this.fechaExpiraIngresada});
  }
}
