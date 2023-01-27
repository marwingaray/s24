import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona24Component } from './asincrona24/asincrona24.component';
import { CanactivateGuard } from './canactivate.guard';



const routes: Routes = [
  {path: 'asincrona24', component: Asincrona24Component, canActivate: [CanactivateGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
