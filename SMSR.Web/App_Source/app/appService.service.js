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
        this.entryTypeBase = "/api/EntryTypes";
        this.statusReportBase = "/api/StatusReports";
        this.statusReportEntryBase = "/api/StatusReportEntries";
    }
    AppService.prototype.formatDatePickerModelAsString = function (model) {
        if (model == null || model.year == 0) {
            return "";
        }
        var result = model.year.toString();
        result += "-";
        result += (model.month < 10) ? "0" + model.month : model.month.toString();
        result += "-";
        result += (model.day < 10) ? "0" + model.day : model.day.toString();
        return result;
    };
    AppService.prototype.getAppActions = function (user) {
        var result = new Array();
        if (user.IsActive && user.IsAuthor) {
            result.push({ route: "/create", label: "Create Report" });
        }
        if (user.IsActive && user.IsAuthor) {
            result.push({ route: "/list", label: "List Reports" });
        }
        if (user.IsActive && user.IsAuthor) {
            result.push({ route: "/generateMSR", label: "Generate MSR" });
        }
        if (user.IsActive && user.IsAuthor) {
            result.push({ route: "/admin", label: "Admin" });
        }
        return result;
    };
    AppService.prototype.getMe = function () {
        var url = this.userBase + "/0";
        return this.httpClient.get(url);
    };
    AppService.prototype.getUsers = function () {
        return this.getEntities(this.userBase);
    };
    AppService.prototype.saveUser = function (user) {
        return this.saveEntity(user, this.userBase);
    };
    AppService.prototype.addUser = function (user) {
        return this.addEntity(user, this.userBase);
    };
    AppService.prototype.getProjects = function () {
        return this.getEntities(this.projectBase);
    };
    AppService.prototype.saveProject = function (project) {
        return this.saveEntity(project, this.projectBase);
    };
    AppService.prototype.addProject = function (project) {
        return this.addEntity(project, this.projectBase);
    };
    AppService.prototype.getEntryTypes = function () {
        return this.getEntities(this.entryTypeBase);
    };
    AppService.prototype.saveEntryType = function (entryType) {
        return this.saveEntity(entryType, this.entryTypeBase);
    };
    AppService.prototype.addEntryType = function (entryType) {
        return this.addEntity(entryType, this.entryTypeBase);
    };
    AppService.prototype.searchStatusReports = function (criteria) {
        var url = this.statusReportBase + "/search";
        return this.httpClient.post(url, criteria);
    };
    AppService.prototype.generateMSR = function (criteria) {
        var url = this.statusReportBase + "/generateMSr";
        return this.httpClient.post(url, criteria);
    };
    AppService.prototype.getStatusReport = function (id) {
        return this.getEntity(id, this.statusReportBase);
    };
    AppService.prototype.saveStatusReport = function (statusReport) {
        return this.saveEntity(statusReport, this.statusReportBase);
    };
    AppService.prototype.addStatusReport = function (statusReport) {
        return this.addEntity(statusReport, this.statusReportBase);
    };
    AppService.prototype.deleteStatusReport = function (id) {
        return this.deleteEntity(id, this.statusReportBase);
    };
    AppService.prototype.getStatusReportEntry = function (id) {
        return this.getEntity(id, this.statusReportEntryBase);
    };
    AppService.prototype.saveStatusReportEntry = function (statusReportEntry) {
        return this.saveEntity(statusReportEntry, this.statusReportEntryBase);
    };
    AppService.prototype.addStatusReportEntry = function (statusReportEntry) {
        return this.addEntity(statusReportEntry, this.statusReportEntryBase);
    };
    AppService.prototype.deleteStatusReportEntry = function (id) {
        return this.deleteEntity(id, this.statusReportEntryBase);
    };
    AppService.prototype.getEntity = function (id, baseUrl) {
        var url = baseUrl + "/" + id;
        return this.httpClient.get(url);
    };
    AppService.prototype.getEntities = function (baseUrl) {
        return this.httpClient.get(baseUrl);
    };
    AppService.prototype.saveEntity = function (entity, baseUrl) {
        var url = baseUrl + "/" + entity.Id;
        return this.httpClient.put(url, entity);
    };
    AppService.prototype.addEntity = function (entity, baseUrl) {
        var url = "" + baseUrl;
        return this.httpClient.post(url, entity);
    };
    AppService.prototype.deleteEntity = function (id, baseUrl) {
        var url = baseUrl + "/" + id;
        return this.httpClient.delete(url);
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