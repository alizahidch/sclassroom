import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentregComponent } from '../../src/app/studentreg/studentreg.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const routes: Routes = [
  {path: 'sreg',component:StudentregComponent},
  {path: 'slogin',component:StudentloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
