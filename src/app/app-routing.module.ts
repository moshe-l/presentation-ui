import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './pages/view/view.component';
import { OrHahaimComponent } from './pages/or-hahaim/or-hahaim.component';
import { ExpensesSettingComponent } from './pages/expenses/expenses-setting/expenses-setting.component';
import { ExpensesViewComponent } from './pages/expenses/expenses-view/expenses-view.component';


const routes: Routes = [
  {path : 'view' , component : ViewComponent},
  {path : 'view/:isEdit' , component : ViewComponent},
  {path : 'or' , component : OrHahaimComponent},
  {path : 'expenses-setting' , component : ExpensesSettingComponent},
  {path : 'expenses-view' , component : ExpensesViewComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
