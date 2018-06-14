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
var appService_service_1 = require("../appService.service");
var types_1 = require("../types");
var ListComponent = (function () {
    function ListComponent(appService) {
        this.appService = appService;
        this.criteria = new types_1.SearchCriteria();
        this.users = new Array();
        this.projects = new Array();
        this.searchResults = new Array();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
        this.appService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    ListComponent.prototype.search = function () {
        var _this = this;
        this.appService.searchStatusReports(this.criteria).subscribe(function (results) {
            _this.searchResults = new Array();
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                result.ReportDate = result.ReportDate.substr(0, 10);
                _this.searchResults.push(result);
            }
        });
    };
    ListComponent.prototype.resetCriteria = function () {
        this.criteria = new types_1.SearchCriteria();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: 'App_Source/app/list/list.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map