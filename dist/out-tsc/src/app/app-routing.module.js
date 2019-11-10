import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './pages/view/view.component';
import { OrHahaimComponent } from './pages/or-hahaim/or-hahaim.component';
import { ExpensesSettingComponent } from './pages/expenses/expenses-setting/expenses-setting.component';
import { ExpensesViewComponent } from './pages/expenses/expenses-view/expenses-view.component';
var routes = [
    { path: 'view', component: ViewComponent },
    { path: 'view/:isEdit', component: ViewComponent },
    { path: 'or', component: OrHahaimComponent },
    { path: 'expenses-setting', component: ExpensesSettingComponent },
    { path: 'expenses-view', component: ExpensesViewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map