import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefensivosComponent } from './pages/defensivos/defensivos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"defensivos", component: DefensivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
