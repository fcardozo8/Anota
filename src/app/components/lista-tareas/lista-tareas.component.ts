import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: TareaModel[] = [ new TareaModel(3,new Date(),"Diego Alberto Milito","APOS"),
                          new TareaModel(2,new Date(),"Lisandro Lopez","APOS"),
                          new TareaModel(1,new Date(),"Gabriel Arias","APOS")

  ];
  constructor() { }

  ngOnInit(): void {
  }

  eliminarTarea(id:number){
    console.log(id);
    this.tareas = this.tareas.filter(t => t.id != id);
  }

  agregarTarea(nombre:string, edad:string, obraSocial:string){
    var b = parseInt(edad);
     if(b<18){
      window.alert("El paciente es menor: solicitar autorizacion ");
     } 
     if (nombre.length>0){
      var date=new Date();
      var anio= date.getFullYear
      var mes= date.getMonth
      let tareaNueva = new TareaModel(TareaModel.utlimo_id+1,new Date(), nombre, obraSocial);
      this.tareas = [tareaNueva, ...this.tareas];
    }
  }

  obraSocial:string="";
  nombreTareaNueva:string = "";
  otraFormaAgregarTarea(){
    if (this.nombreTareaNueva.length>0){
      let tareaNueva = new TareaModel(TareaModel.utlimo_id+1,new Date(), this.nombreTareaNueva,this.obraSocial);
      this.tareas.unshift(tareaNueva);
    }
  }
  onInputChange(evt:any){
    this.nombreTareaNueva = evt.target.value;
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

  modificarTarea(id: number, titulox: string){
    let elementIndex = this.tareas.findIndex((obj => obj.id == id));
    console.log(elementIndex);
    this.tareas[elementIndex].titulo = titulox;
  }

}
