import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
        this.header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    GithubService.prototype.get = function (path) {
        var _this = this;
        return this.http.get("https://api.github.com/repos/moshe-l/presentation-images/contents/" + path, { headers: this.header }).pipe(catchError(function (res) { return _this.handleError(res); }));
    };
    GithubService.prototype.getTitle = function () {
        var _this = this;
        return this.http.get("https://raw.githubusercontent.com/moshe-l/presentation-images/master/title", { responseType: 'text' }).pipe(catchError(function (res) { return _this.handleError(res); }));
    };
    GithubService.prototype.handleError = function (res) {
        console.log(res);
        var error = {
            statusCode: res.status,
            error: res.message
        };
        return throwError(error);
    };
    GithubService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GithubService);
    return GithubService;
}());
export { GithubService };
//# sourceMappingURL=github.service.js.map