import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tarea } from './tarea.model';


@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
@Input({ required: true }) Tarea!: Tarea;
@Output() terminada = new EventEmitter<string>();

CompletarTarea() {
  this.terminada.emit(this.Tarea.id);
}
}
