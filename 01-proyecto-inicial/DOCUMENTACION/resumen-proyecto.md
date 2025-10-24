# Resumen completo del proyecto "proyecto-inicial"

## Propósito
Aplicación para listar usuarios y ver/gestionar sus tareas (seleccionar usuario → ver tareas → agregar/completar tareas).

## Modelos de datos
- Usuario: { id: string, nombre: string, avatar: string }  
- Tarea: { id: string, idUsuario: string, titulo: string, resumen: string, expira: string }  
- Datos de ejemplo en `src/app/usuario-falsos.ts`.

## Estructura de componentes (standalone)
- AppComponent (selector: `app-raiz`)
  - Estado: `usuarios`, `idUsuarioSeleccionado?: string`
  - Getter `usuarioSeleccionado` para buscar por id
  - Método `SeleccionarUsuario(id: string)` para actualizar selección
  - Template: lista de `<app-usuario>` y render condicional de `<app-tareas>`

- EncabezadoComponent
  - Título/presentación

- UsuarioComponent
  - `@Input() usuario: Usuario`
  - `@Input() seleccionado: boolean`
  - `@Output() seleccionarUsuario = EventEmitter<string>()`
  - Muestra avatar/nombre y emite selección

- TareasComponent (`app-tareas`)
  - `@Input() idUsuario: string`, `@Input() nombre: string`
  - Flags: `estarAgregandoTareaNueva`, `cerrar`
  - `tareas` (array), getter `tareasUsuarioSeleccionado`
  - Métodos: `alIniciarNuevaTarea()`, `cerrarFormulario(guardar: boolean)`, `alAgregarTarea(info)`, `alCompletarTarea(id)`

- TareaComponent (`app-tarea`)
  - `@Input() tarea: Tarea`
  - `@Output() terminada = EventEmitter<string>()`

- TareaNuevaComponent (`app-tarea-nueva`)
  - Usa `FormsModule`
  - `@Output() cerrar`, `@Output() agregar`
  - Campos con `[(ngModel)]` y emite al enviar o cerrar

## Flujo de datos / eventos
- AppComponent lista usuarios → UsuarioComponent emite `seleccionarUsuario(id)` → AppComponent actualiza `idUsuarioSeleccionado`.
- AppComponent pasa `usuarioSeleccionado.id` y `nombre` a TareasComponent.
- TareasComponent filtra y muestra tareas; maneja agregar y completar tareas mediante eventos desde hijos.

## Templates y sintaxis
- Utiliza sintaxis moderna (`@for`, `@if`) — versiones Angular 17/18.
- Bindings: `[]` para properties, `[(ngModel)]` para two‑way binding.
- Usar `?.` en comparaciones para evitar null/undefined (ej. `usuarioSeleccionado?.id`).

## Errores/tareas comunes detectadas
- Tipos inconsistentes: asegurar `id` como string.
- Comparaciones correctas: comparar ids, no objetos completos.
- Importar `FormsModule` para `ngModel` en componentes standalone.
- Selectores correctos en templates (ej. `app-tareas`).
- Layout: usar flex para alinear botones a la derecha.

## Mejoras sugeridas
- Tipado estricto en EventEmitter.
- `trackBy` en iteraciones para rendimiento.
- Validación y persistencia (localStorage/servicio).
- Tests unitarios para selección/crear/completar tareas.