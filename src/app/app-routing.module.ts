import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './componente/dash/dash.component';
import { FormularioComponent } from './componente/formulario/formulario.component';


const routes: Routes = [
      { path: 'dashboard', component: DashComponent},
      { path: 'formulario', component: FormularioComponent}
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
