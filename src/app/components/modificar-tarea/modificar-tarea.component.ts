import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent implements OnInit {

  tarea: TareaModel = new TareaModel(1,new Date(), "EStudiar Angular","SANCOR");

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
    if (form.valid){
      Swal.fire("Confirmacion", "Gracias por Registrarse en el curso", "success");
      form.reset();
    }else{
      Swal.fire("Error", "Datos Incorrectos", "error");
    }
  }

}
