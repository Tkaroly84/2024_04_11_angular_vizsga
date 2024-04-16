import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovenyekComponent } from './part/novenyek/novenyek.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { RolunkComponent } from './part/rolunk/rolunk.component';

const routes: Routes = [
  {path:"novenyek", component:NovenyekComponent},
  {path:"rendeles", component:RendelesComponent},
  {path:"rolunk", component:RolunkComponent},
  
  
  {path:"", component:RolunkComponent},
  {path:"**", component:RolunkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
