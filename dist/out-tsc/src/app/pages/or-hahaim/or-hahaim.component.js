import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
var OrHahaimComponent = /** @class */ (function () {
    function OrHahaimComponent(svc) {
        var _this = this;
        this.svc = svc;
        this.id = 43;
        this.lastId = 0;
        this.svc.getTora().subscribe(function (res) {
            _this.toraList = (res.docs.map(function (doc) {
                return tslib_1.__assign({ guid: doc.id }, doc.data());
            })).sort(function (a, b) { return a.id - b.id; });
            console.log(_this.toraList);
        });
    }
    OrHahaimComponent.prototype.send = function () {
        this.id++;
        this.svc.addParasha(this.name, this.id);
    };
    OrHahaimComponent.prototype.update = function (guid, name, event) {
        this.svc.updateStudy(guid, name, event.target.checked);
    };
    OrHahaimComponent.prototype.isBookName = function (id) {
        var res;
        if (id != this.lastId)
            res = true;
        else
            res = false;
        this.lastId = id;
        return res;
    };
    OrHahaimComponent.prototype.ngOnInit = function () {
    };
    OrHahaimComponent = tslib_1.__decorate([
        Component({
            selector: 'app-or-hahaim',
            templateUrl: './or-hahaim.component.html',
            styleUrls: ['./or-hahaim.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FirestoreService])
    ], OrHahaimComponent);
    return OrHahaimComponent;
}());
export { OrHahaimComponent };
//# sourceMappingURL=or-hahaim.component.js.map