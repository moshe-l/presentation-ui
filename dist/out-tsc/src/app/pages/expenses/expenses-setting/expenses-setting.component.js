import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
var ExpensesSettingComponent = /** @class */ (function () {
    function ExpensesSettingComponent(svc) {
        var _this = this;
        this.svc = svc;
        this.svc.getSettings().subscribe(function (res) {
            _this.setting = res.data();
        });
    }
    ExpensesSettingComponent.prototype.save = function () {
        this.svc.updateSettings(this.setting);
    };
    ExpensesSettingComponent.prototype.ngOnInit = function () {
    };
    ExpensesSettingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-expenses-setting',
            templateUrl: './expenses-setting.component.html',
            styleUrls: ['./expenses-setting.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FirestoreService])
    ], ExpensesSettingComponent);
    return ExpensesSettingComponent;
}());
export { ExpensesSettingComponent };
//# sourceMappingURL=expenses-setting.component.js.map