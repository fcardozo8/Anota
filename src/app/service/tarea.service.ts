import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class TareaService {
  tareas!: Tarea[];
  nuevaTarea = new Tarea(0,new Date,"","");
  url: string = "http://localhost:3000/tareas";

  constructor(public http: HttpClient) { }

  getAllTareas( ):Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.url);


  }

  getTareabyId(id: number): Observable<Tarea>{
    return this.http.get<Tarea>(this.url+"/"+id); //"http://localhost:3000/tareas/+3"
  }

  addTarea(tarea: Tarea):Observable<any>{
    return this.http.post(this.url,tarea);
  }

  updateTarea(id: number,tarea: Tarea):Observable<any>{
    console.log("SERVICIO");
    console.log("-------"+id+"-----"+tarea.titulo);
    return this.http.put(this.url + "/" + tarea.id, tarea);
  }

  deleteTarea(id: number):Observable<any>{
    return this.http.delete(this.url + "/"  + id);
  }
}
