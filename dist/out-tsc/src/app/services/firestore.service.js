import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var FirestoreService = /** @class */ (function () {
    function FirestoreService(db) {
        this.db = db;
    }
    // view
    FirestoreService.prototype.getCount = function () {
        return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').get();
    };
    FirestoreService.prototype.listen = function () {
        return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').valueChanges();
    };
    FirestoreService.prototype.change = function (newID) {
        this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').update({ current: newID });
    };
    // or hahaim
    FirestoreService.prototype.addParasha = function (name, id) {
        this.db.collection('tora').add({
            bookId: 5,
            comment: "",
            fifth: false,
            first: false,
            fourth: false,
            id: id,
            name: name,
            second: false,
            seventh: false,
            sixth: false,
            third: false
        });
    };
    FirestoreService.prototype.getTora = function () {
        return this.db.collection('tora').get();
    };
    FirestoreService.prototype.updateStudy = function (docId, filedName, value) {
        var _a;
        this.db.collection('tora').doc(docId).update((_a = {}, _a[filedName] = value, _a))
            .then(function (res) { return alert("העידכון בוצע"); })
            .catch(function (err) { return alert("אירעה שגיאה בעדכון"); });
    };
    //expenses
    FirestoreService.prototype.getSettings = function () {
        return this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').get();
    };
    FirestoreService.prototype.updateSettings = function (model) {
        this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').update(model);
    };
    FirestoreService.prototype.addItem = function (item) {
        return this.db.collection('expenses').add(item);
    };
    FirestoreService.prototype.getAll = function () {
        return this.db.collection('expenses').get();
    };
    FirestoreService.prototype.getExpensesPerMonth = function (year, month) {
        console.log(year + " " + month);
        var startStr = year + "-" + (Number.parseInt(month) + 1) + "-01";
        var endStr = year + "-" + (Number.parseInt(month) + 1) + "-31";
        console.log(startStr + " " + endStr);
        var start = new Date(startStr);
        var end = new Date(endStr);
        console.log(start + " " + end);
        return this.db.collection('expenses', function (ref) { return ref.where('date', '>=', start).where('date', '<=', end); }).get();
    };
    FirestoreService.prototype.deleteExspensItem = function (id) {
        return this.db.collection('expenses').doc(id).delete();
    };
    FirestoreService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], FirestoreService);
    return FirestoreService;
}());
export { FirestoreService };
//# sourceMappingURL=firestore.service.js.map