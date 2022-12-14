import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import{ListaEsperaReactiveComponent} from "./components/lista-espera-reactive/lista-espera-reactive-server";

const routes: Routes = [
//  {path:"", component: AppComponent},
//  {path:"**", component: AppComponent},
//  {path:"modificar-tarea", component: ModificarTareaComponent},
  {path:"lista-tareas-server", component: ListaTareasServerComponent},
  {path:"lista-tareas", component: ListaTareasComponent},
  {path:"pagina-principal", component:HomeComponent},
  {path:"footer", component:FooterComponent},
  {path:"lista-espera-reactive-server", component:ListaEsperaReactiveComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
