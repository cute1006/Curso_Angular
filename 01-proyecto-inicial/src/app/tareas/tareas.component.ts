import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaComponent } from "./tarea/tarea.component";
import { TareaNuevaComponent } from "./tarea-nueva/tarea-nueva.component";

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaComponent, TareaNuevaComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
 @Input({ required: true }) nombre!: string;
  estarAgregandoTareaNueva = false;
  cerrar = false
 tareas = [
  {
       id:'t1',
       idUsuario:'u1',
       titulo:'Dominar Angular',
        resumen:'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
        expira:'2025-01-01'
  },
  {
    id: 't2',
    idUsuario: 'u3',
    titulo: 'Crear el primer prototipo',
    resumen: 'Crear el primer prototipo del sitio web de la tienda',
    expira: '2025-11-05',
  },
   {
    id: 't3',
    idUsuario: 'u3',
    titulo: 'Una tarea mas para este usuario',
    resumen: 'En resumen se agrego una tarea mas para el usuario 3 para probar el filtro',
    expira: '2025-11-05',
  },
  {
    id: 't3',
    idUsuario: 'u3',
    titulo: 'Preparar la plantilla del carrito',
    resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
    expira: '2025-05-16',
  },
  
 ];
 get tareasUsuarioSeleccionado(){
  return this.tareas.filter(tarea => tarea.idUsuario === this.idUsuario);
 }

 alCompletarTarea(idTarea: string){
  this.tareas = this.tareas.filter(Tarea => Tarea.id !== idTarea);
 }

 alIniciarNuevaTarea() {
  this.estarAgregandoTareaNueva = true;
 }
 cerrarFormulario(guardar: boolean) {
 this.cerrar = guardar;
  this.estarAgregandoTareaNueva = false;
 }
}
 
