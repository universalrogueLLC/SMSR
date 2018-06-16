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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var appService_service_1 = require("../appService.service");
var ShellComponent = (function () {
    function ShellComponent(appService, modalService) {
        this.appService = appService;
        this.modalService = modalService;
        this.actions = new Array();
        this.navDialogRef = null;
    }
    ShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getMe().subscribe(function (user) {
            _this.me = user;
            _this.actions = _this.appService.getAppActions(_this.me);
        });
    };
    ShellComponent.prototype.openModal = function (dialog) {
        this.navDialogRef = this.modalService.open(dialog, { size: "sm" });
        this.navDialogRef.result.then(function (result) {
        }, function (reason) {
        });
    };
    ShellComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ShellComponent.prototype.navDialogNavigate = function (action) {
        if (this.navDialogRef != null) {
            this.navDialogRef.dismiss("Navigating: " + action.route);
            document.location.href = "/#" + action.route;
        }
    };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'app-shell',
            templateUrl: 'App_Source/app/shell/shell.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return ng_bootstrap_1.NgbModal; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService,
            ng_bootstrap_1.NgbModal])
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;
//# sourceMappingURL=shell.component.js.map