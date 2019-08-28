import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './pages/view/view.component';


const routes: Routes = [
  {path : '' , component : ViewComponent},
  {path : ':isEdit' , component : ViewComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
