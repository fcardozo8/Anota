import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { HttpClient } from '@angular/common/http';
import { TareaService } from '../../service/tarea.service';
import Swal from 'sweetalert2';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-server',
  templateUrl: './lista-tareas-server.component.html',
  styleUrls: ['./lista-tareas-server.component.css']
})
export class ListaTareasServerComponent implements OnInit {

  tareas: Tarea[] = [];


constructor(private tareaService: TareaService) {
  tareaService.getAllTareas().subscribe((resp: Tarea[])=>{
    this.tareas = resp;
  });
  console.log(this.tareas);
 }

ngOnInit(): void {
}
agregarTarea(){
  console.log("Agregar");

  }

eliminarTarea(id:number){
console.log(id);
Swal.fire({
  title:"Confirmacion",
  text:"Esta seguro que dese eliminar?",
  icon:"warning",
  showCancelButton:true,
  showConfirmButton:true
}).then((resp)=>{
  if (resp.isConfirmed){
    this.tareaService.deleteTarea(id).subscribe(()=>{
      this.tareaService.getAllTareas().subscribe((resp: Tarea[])=>{
        this.tareas = resp;
      })
    })
  }
})

}
modificarTarea(id: number, titulox: string){
    let elementIndex = this.tareas.findIndex((obj => obj.id == id));
    console.log(elementIndex);
    this.tareas[elementIndex].titulo = titulox;
  }

prepararModificar(id:number , titulo: string){

    Swal.fire({
      title: 'Tarea '+titulo,
      text: 'Introduce el Titulo aquí',
      input: 'text',
      inputPlaceholder: 'Titulo',

      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.modificarTarea(id,result.value);
      }
    });

}




}

