import { Component, OnInit , EventEmitter, Input,Output} from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { TareaService } from 'src/app/service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-espera-reactive',
  templateUrl: './lista-espera-reactive-server.html',
  styleUrls: ['./lista-espera-reactive-server.css']
})
export class ListaEsperaReactiveComponent implements OnInit {

    formulario : FormGroup;
    tareas : Tarea[] = [];
    @Input()
    tarea: Tarea = new Tarea(0,new Date(), "wqeqew","obra");
    id!: number;
 
constructor(private tareaService: TareaService,private router:Router, formBuilder : FormBuilder ) {
  tareaService.getAllTareas().subscribe((resp: Tarea[])=>{
    this.tareas = resp;
  });
  console.log(this.tareas);
 
 this.formulario = formBuilder.group<Tarea>({
  id: 0,
  titulo : "",
  fecha:new Date(),
  obraSocial:""
  });
console.log(this.formulario);
this.formulario.get("titulo")?.addValidators(Validators.required),Validators.required, Validators.minLength(3), Validators.maxLength(50);
this.formulario.get("edad")?.addValidators(Validators.min(18));
this.formulario.get("fecha")?.addValidators([Validators.required]);

}

ngOnInit(): void {
  
}

show(producto:Tarea){
  this.formulario.patchValue(producto);
}
formSubmit(){
  if (this.formulario.valid){
    this.tareaService.addTarea(this.formulario.value).subscribe(()=>{
      this.router.navigate(["lista-tareas-server-reactive"]);
    });
    alert("confirmado");

  }else{
    alert("Error");
  }
}

submitForm(){


  

    Swal.fire({
      title: 'Paciente',
      html: `<input type="text" id="titulo" class="swal2-input" placeholder="Nombre">
      <input type="text" id="obraSocial" class="swal2-input" placeholder="Obra Social">`,
      confirmButtonText: 'Guardar',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = Swal.getPopup()?.querySelector('titulo')?.ariaValueText
        const obraSocial = Swal.getPopup()?.querySelector('obraSocial')?.ariaValueText
        return { nombre: nombre, obraSocial: obraSocial }
      }
    

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.modificarTarea(this.id,result.value?.nombre!,result.value?.obraSocial!);
        let titulo=result.value?.nombre
        let obraSocial=result.value?.obraSocial
        let TareaM= new Tarea(this.id,new Date(),titulo!,obraSocial!)
        this.tareaService.updateTarea(this.id,TareaM).subscribe(()=>{
        } )
      }  
    })
  
} 
modificarTarea(id: number, titulox: string, obraSocial2:string){
  let elementIndex = this.tareas.findIndex((obj => obj.id == id));
  console.log(elementIndex);
  this.tareas[elementIndex].titulo = titulox;
  this.tareas[elementIndex].obraSocial=obraSocial2;
}
updateTarea(){
  console.log("-------"+this.id+"-----"+this.tarea.titulo);
  this.tareaService.updateTarea(this.id,this.formulario.value).subscribe(()=>{
    this.router.navigate(["lista-tareas-server-reactive"]);
  })
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
}
