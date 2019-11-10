import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
var ExpensesViewComponent = /** @class */ (function () {
    function ExpensesViewComponent(svc) {
        this.svc = svc;
        this.expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null };
        //oldExpenses: any;
        this.monthNames = ["ינואר", "פבואר", "מרץ", "אפריל", "מאי", "יוני",
            "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
        ];
        this.getPerMonth(true);
    }
    ExpensesViewComponent.prototype.ngOnInit = function () {
    };
    ExpensesViewComponent.prototype.add = function () {
        var _this = this;
        console.log(this.expens);
        if (!this.validation()) {
            alert("מלאו את כל השדות חבר'ה");
            return;
        }
        this.svc.addItem(this.expens).then(function (res) {
            alert("הפעולה בוצעה בהצלחה!!!");
            if (_this.expens.date.getMonth() == _this.month) {
                _this.expens.tempId = res.id;
                _this.selectedMonthExpenses.push(_this.expens);
                _this.calcBalances();
            }
            _this.expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null };
        }).catch(function (err) {
            alert("שגיאה : " + err);
        });
    };
    ExpensesViewComponent.prototype.validation = function () {
        if (this.expens.amount != null && this.expens.desc != "" && this.expens.type != null && this.expens.date != null)
            return true;
        return false;
    };
    // getOldAndSetting(){
    //   var setting$ = this.svc.getSettings();
    //   var oldExpenses$ =  this.svc.getAll();
    //   combineLatest(setting$, oldExpenses$, (setting,oldExpenses) => ({setting,oldExpenses})).subscribe(pair => {
    //     this.oldExpenses = pair.oldExpenses.docs.map((i) => { return { id: i.id, ...i.data() } });
    //     this.oldExpenses.map(i => i.date = new Date(i.date.seconds * 1000));
    //     console.log(this.oldExpenses);
    //     this.setting = pair.setting.data();    
    //     this.calcBalances();
    //   })
    // }
    ExpensesViewComponent.prototype.getPerMonth = function (toBringSetting) {
        var _this = this;
        if (toBringSetting === void 0) { toBringSetting = false; }
        if (this.month == null) {
            var date = new Date();
            this.month = date.getMonth();
            this.year = date.getFullYear();
        }
        this.currentMonthName = this.monthNames[this.month];
        this.svc.getExpensesPerMonth(this.year, this.month)
            .subscribe(function (res) {
            _this.selectedMonthExpenses = res.docs.map(function (i) { return tslib_1.__assign({ id: i.id }, i.data()); });
            _this.selectedMonthExpenses.map(function (i) { return i.date = new Date(i.date.seconds * 1000); });
            console.log(_this.selectedMonthExpenses);
            if (toBringSetting) {
                _this.svc.getSettings().subscribe(function (res) {
                    _this.setting = res.data();
                    _this.calcBalances();
                });
            }
            else {
                _this.calcBalances();
            }
        });
    };
    ExpensesViewComponent.prototype.calcBalances = function () {
        this.groceryBalance = this.calcBalance('grocery');
        this.homeBalance = this.calcBalance('home');
        this.entertainmentBalance = this.calcBalance('entertainment');
        this.homeSum = this.calcSum('home');
        this.entertainmentSum = this.calcSum('entertainment');
        this.grocerySum = this.calcSum('grocery');
        this.fullSum = this.homeSum + this.entertainmentSum + this.grocerySum;
    };
    ExpensesViewComponent.prototype.calcBalance = function (type) {
        var items = this.selectedMonthExpenses.filter(function (e) { return e.type == type; });
        var sum = items.map(function (i) { return i.amount; }).reduce(function (a, b) { return a + b; }, 0);
        return this.setting[type] - sum;
    };
    ExpensesViewComponent.prototype.calcSum = function (type) {
        var items = this.selectedMonthExpenses.filter(function (i) { return i.type == type; });
        var sum = items.map(function (i) { return i.amount; }).reduce(function (a, b) { return a + b; }, 0);
        return sum;
    };
    ExpensesViewComponent.prototype.deleteItem = function (item) {
        var _this = this;
        if (!confirm('בטוח? לא לעבוד על המערכת בבקשה'))
            return;
        var id = (item.id != null ? item.id : item.tempId);
        this.svc.deleteExspensItem(id).then(function (res) {
            alert("הפריט נמחק!!!");
            _this.selectedMonthExpenses = _this.selectedMonthExpenses.filter(function (e) { return e.id != id && e.tempId != id; });
            _this.calcBalances();
        }).catch(function (err) {
            alert(err);
        });
    };
    ExpensesViewComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ExpensesViewComponent.prototype.getType = function (type) {
        switch (type) {
            case 'home':
                return 'בית';
            case 'grocery':
                return 'מכולת';
            case 'entertainment':
                return 'בילויים';
            default:
                break;
        }
    };
    ExpensesViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-expenses-view',
            templateUrl: './expenses-view.component.html',
            styleUrls: ['./expenses-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FirestoreService])
    ], ExpensesViewComponent);
    return ExpensesViewComponent;
}());
export { ExpensesViewComponent };
export var expensType;
(function (expensType) {
    expensType[expensType["home"] = 0] = "home";
    expensType[expensType["grocery"] = 1] = "grocery";
    expensType[expensType["entertainment"] = 2] = "entertainment";
})(expensType || (expensType = {}));
//# sourceMappingURL=expenses-view.component.js.map