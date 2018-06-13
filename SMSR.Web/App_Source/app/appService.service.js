"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppService = (function () {
    function AppService(httpClient) {
        this.httpClient = httpClient;
        this.projectBase = "/api/Projects";
        this.userBase = "/api/Users";
    }
    AppService.prototype.getMe = function () {
        var url = this.userBase + "/0";
        return this.httpClient.get(url);
    };
    AppService.prototype.getUsers = function () {
        var url = "" + this.userBase;
        return this.httpClient.get(url);
    };
    AppService.prototype.saveUser = function (user) {
        var url = this.userBase + "/" + user.Id;
        return this.httpClient.put(url, user);
    };
    AppService.prototype.addUser = function (user) {
        var url = "" + this.userBase;
        return this.httpClient.post(url, user);
    };
    AppService.prototype.getProjects = function () {
        var url = "" + this.projectBase;
        return this.httpClient.get(url);
    };
    AppService.prototype.saveProject = function (project) {
        var url = this.projectBase + "/" + project.Id;
        return this.httpClient.put(url, project);
    };
    AppService.prototype.addProject = function (project) {
        var url = "" + this.projectBase;
        return this.httpClient.post(url, project);
    };
    AppService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return http_1.HttpClient; }))),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=appService.service.js.map