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
var router_1 = require("@angular/router");
var appService_service_1 = require("../appService.service");
var entities_1 = require("../entities");
var DetailsComponent = (function () {
    function DetailsComponent(appService, activatedRoute) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.canEdit = false;
        this.canDelete = false;
        this.statusReport = new entities_1.StatusReport();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.appService.getStatusReport(id).subscribe(function (statusReport) {
            _this.statusReport = statusReport;
            _this.appService.getMe().subscribe(function (user) {
                _this.me = user;
                _this.canEdit = _this.me.Id == _this.statusReport.UserId;
                _this.canDelete = _this.me.Id == _this.statusReport.UserId;
            });
        });
    };
    DetailsComponent.prototype.editStatusReport = function () {
        var editUrl = "/#/edit/" + this.statusReport.Id;
        document.location.href = editUrl;
    };
    DetailsComponent.prototype.deleteStatusReport = function () {
        if (confirm("Are you sure you want to delete this status report?")) {
            this.appService.deleteStatusReport(this.statusReport.Id).subscribe(function (result) {
                document.location.href = "/#/home";
            });
        }
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: 'App_Source/app/details/details.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return router_1.ActivatedRoute; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService,
            router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map