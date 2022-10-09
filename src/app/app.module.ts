import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HomeComponent } from "./components/home/home.component";
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent,
    ModificarTareaComponent,
    ListaTareasServerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
