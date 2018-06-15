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
var EditComponent = (function () {
    function EditComponent(appService, activatedRoute) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.canEdit = false;
        this.canDelete = false;
        this.entryTypes = new Array();
        this.statusReport = new entities_1.StatusReport();
        this.newEntry = new entities_1.StatusReportEntry();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.appService.getEntryTypes().subscribe(function (entryTypes) {
            _this.entryTypes = entryTypes;
        });
        this.appService.getStatusReport(id).subscribe(function (statusReport) {
            _this.statusReport = statusReport;
            _this.appService.getMe().subscribe(function (user) {
                _this.me = user;
                _this.canEdit = _this.me.Id == _this.statusReport.UserId;
                _this.canDelete = _this.me.Id == _this.statusReport.UserId;
                _this.initNewEntry();
            });
        });
    };
    EditComponent.prototype.initNewEntry = function () {
        this.newEntry = new entities_1.StatusReportEntry();
        this.newEntry.StatusReportId = this.statusReport.Id;
    };
    EditComponent.prototype.deleteStatusReport = function () {
        if (confirm("Are you sure you want to delete this status report?")) {
            this.appService.deleteStatusReport(this.statusReport.Id).subscribe(function (result) {
                document.location.href = "/#/home";
            });
        }
    };
    EditComponent.prototype.addEntry = function () {
        var _this = this;
        this.appService.addStatusReportEntry(this.newEntry).subscribe(function (result) {
            _this.statusReport.Entries.push(result);
            _this.initNewEntry();
        });
    };
    EditComponent.prototype.saveEntry = function (index) {
        var entry = this.statusReport.Entries[index];
        var saveEntry = {
            Id: entry.Id,
            EntryTypeId: entry.EntryTypeId,
            Notes: entry.Notes,
            StatusReportId: entry.StatusReportId,
            Value: entry.Value,
            EntryType: null
        };
        this.appService.saveStatusReportEntry(saveEntry).subscribe(function (result) {
            alert("Entry saved");
        });
    };
    EditComponent.prototype.deleteEntry = function (index) {
        var _this = this;
        if (confirm("Are you sure you want to delete this entry?")) {
            var entry = this.statusReport.Entries[index];
            this.appService.deleteStatusReportEntry(entry.Id).subscribe(function (result) {
                _this.statusReport.Entries.splice(index, 1);
            });
        }
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: 'App_Source/app/edit/edit.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return router_1.ActivatedRoute; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService,
            router_1.ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map