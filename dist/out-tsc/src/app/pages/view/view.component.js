import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { DomSanitizer } from '@angular/platform-browser';
var ViewComponent = /** @class */ (function () {
    function ViewComponent(svc, github, route, sanitizer) {
        var _this = this;
        this.svc = svc;
        this.github = github;
        this.route = route;
        this.sanitizer = sanitizer;
        this.carusaleArr = [];
        this.route.params.subscribe(function (p) {
            if (p['isEdit'] == "1")
                _this.isEditMode = true;
            else if (p['isEdit'] == "2")
                _this.toViewAll = true;
        });
        this.github.get('img').subscribe(function (res) {
            res.sort(function (a, b) { return Number.parseInt(a.name.split('.')[0]) - Number.parseInt(b.name.split('.')[0]); });
            for (var i = 0; i < res.length; i++) {
                _this.carusaleArr.push({ index: i, text: res[i].download_url });
            }
            _this.startListening();
        });
        this.github.get('bg').subscribe(function (res) {
            document.getElementsByTagName("body")[0].style.background =
                "linear-gradient(rgba(224, 209, 209, 0.7), rgba(218, 202, 202, 0.7)), url(" + res[0].download_url + ") no-repeat center center fixed";
        });
        this.github.getTitle().subscribe(function (res) {
            _this.title = res;
        });
    }
    ViewComponent.prototype.startListening = function () {
        var _this = this;
        this.svc.listen().subscribe(function (res) {
            _this.currentView = _this.carusaleArr.find(function (x) { return x.index == res.current; });
        });
    };
    ViewComponent.prototype.changeByIndex = function (id) {
        if (this.toViewAll)
            this.svc.change(id);
    };
    ViewComponent.prototype.arrowRight = function () {
        if (this.currentView.index == this.carusaleArr.length - 1)
            this.svc.change(0);
        else
            this.svc.change(this.currentView.index + 1);
    };
    ViewComponent.prototype.arrowLeft = function () {
        if (this.currentView.index == 0)
            this.svc.change(this.carusaleArr.length - 1);
        else
            this.svc.change(this.currentView.index - 1);
    };
    ViewComponent.prototype.sanitize = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FirestoreService, GithubService, ActivatedRoute, DomSanitizer])
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=view.component.js.map