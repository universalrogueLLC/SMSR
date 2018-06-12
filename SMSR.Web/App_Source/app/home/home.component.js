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
var HomeComponent = (function () {
    function HomeComponent(appService) {
        this.appService = appService;
        this.meLabel = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getMe().subscribe(function (user) {
            _this.me = user;
            _this.meLabel = (user.Id == 0) ? user.DN : user.Name;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'App_Source/app/home/home.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return appService_service_1.AppService; }))),
        __metadata("design:paramtypes", [appService_service_1.AppService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map