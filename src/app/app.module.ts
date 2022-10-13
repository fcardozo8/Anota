import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import{ListaEsperaReactiveComponent} from "./components/lista-espera-reactive/lista-espera-reactive-server";


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent,
    ModificarTareaComponent,
    ListaTareasServerComponent,
    HomeComponent,
    FooterComponent,
    ListaEsperaReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
