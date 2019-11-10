import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { tap, map, switchMap, first } from 'rxjs/operators';
import { of } from 'rxjs';
var PresenceService = /** @class */ (function () {
    function PresenceService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        console.log('let there be presence');
        this.updateOnUser().subscribe();
    }
    PresenceService.prototype.updateOnUser = function () {
        var _this = this;
        var connection = this.db.object('.info/connected').valueChanges().pipe(map(function (connected) { return connected ? 'online' : 'offline'; }));
        return this.afAuth.authState.pipe(switchMap(function (user) { return user ? connection : of('offline'); }), tap(function (status) { return _this.setPresence(status); }));
    };
    PresenceService.prototype.getPresence = function (uid) {
        return this.db.object("status/" + uid).valueChanges();
    };
    PresenceService.prototype.getUser = function () {
        return this.afAuth.authState.pipe(first()).toPromise();
    };
    PresenceService.prototype.setPresence = function (status) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, this.db.object("status/" + user.uid).update({ status: status, timestamp: this.timestamp })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PresenceService.prototype, "timestamp", {
        get: function () {
            return firebase.database.ServerValue.TIMESTAMP;
        },
        enumerable: true,
        configurable: true
    });
    PresenceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, AngularFireDatabase])
    ], PresenceService);
    return PresenceService;
}());
export { PresenceService };
//# sourceMappingURL=presence.services.js.map