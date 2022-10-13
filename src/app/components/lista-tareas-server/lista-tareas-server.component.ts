import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  this.tareaService.getTareabyId(4).subscribe((Tarea)=>(this.tareas));
}
agregarTarea(nombre:string, edad:string, obraSocial:string){
  console.log("Agregar");
  let TareaA= new Tarea(Tarea.utlimo_id,new Date(),nombre,obraSocial)
  this.tareaService.addTarea(TareaA).subscribe((Tarea)=>this.tareas.push(Tarea))
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
modificarTarea(id: number, titulox: string, obraSocial2:string){
    let elementIndex = this.tareas.findIndex((obj => obj.id == id));
    console.log(elementIndex);
    this.tareas[elementIndex].titulo = titulox;
    this.tareas[elementIndex].obraSocial=obraSocial2;
  }

prepararModificar(id:number , titulo: string, obraSocial:string){

    Swal.fire({
      title: 'Paciente '+"'"+titulo+"'",
      text: 'Introduce el Titulo aquí',
      input: 'text',
      inputPlaceholder: 'Titulo',
  /*     input2: 'text',
      inputPlaceholder2: 'obraSocial',
*/

      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.modificarTarea(id,result.value,obraSocial);
        titulo=result.value
        let TareaM= new Tarea(id,new Date(),titulo,obraSocial)
        this.tareaService.updateTarea(id,TareaM).subscribe(()=>{
        } )
        this.modificar2(id,titulo,obraSocial);
      }  
    })

}
modificar2(id:number , titulo: string, obraSocial:string){
  Swal.fire({
    title: 'Paciente '+"'"+titulo+"'",
    text: 'Introduce la Obra Social aquí',
    input: 'select',
    inputOptions: {
      'Obra Social': {
        APOS: 'APOS',
        SANCOR: 'SANCOR',
        Ninguna: 'Ninguna',
      }
    },
/*     input2: 'text',
    inputPlaceholder2: 'obraSocial',
*/

    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      this.modificarTarea(id,titulo,result.value);
      obraSocial=result.value
      let TareaM2= new Tarea(id,new Date(),titulo,obraSocial)
      this.tareaService.updateTarea(id,TareaM2).subscribe(()=>{
      } )
    }  
  })
}
}

