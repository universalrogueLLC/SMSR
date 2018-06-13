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
var entities_1 = require("../entities");
var AdminComponent = (function () {
    function AdminComponent(appService) {
        this.appService = appService;
        this.managing = "PROJECTS";
        this.newProject = new entities_1.Project();
        this.projects = new Array();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    AdminComponent.prototype.saveProject = function (index) {
        var project = this.projects[index];
        this.appService.saveProject(project).subscribe(function (result) {
            alert("Project saved");
        });
    };
    AdminComponent.prototype.addProject = function () {
        var _this = this;
        this.appService.addProject(this.newProject).subscribe(function (result) {
            _this.projects.push(result);
            _this.newProject = new entities_1.Project();
            alert("Project added");
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: 'App_Source/app/admin/admin.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map