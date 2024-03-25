import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './componente/dash/dash.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import {TablaComponent} from './componente/tabla/tabla.component';
import {TablaFormularioComponent} from './componente/tabla-formulario/tabla-formulario.component';


const routes: Routes = [
      { path: 'dashboard', component: DashComponent},
      { path: 'formulario', component: FormularioComponent},
      { path: 'tabla', component: TablaComponent},
      { path: 'tablaformulario', component: TablaFormularioComponent}
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
