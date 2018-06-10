"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var createEdit_component_1 = require("./createEdit/createEdit.component");
var list_component_1 = require("./list/list.component");
var generateMSR_component_1 = require("./generateMSR/generateMSR.component");
var admin_component_1 = require("./admin/admin.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'createEdit/:id', component: createEdit_component_1.CreateEditComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'generateMSR', component: generateMSR_component_1.GenerateMSRComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: '', component: home_component_1.HomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent, createEdit_component_1.CreateEditComponent, list_component_1.ListComponent, generateMSR_component_1.GenerateMSRComponent, admin_component_1.AdminComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [home_component_1.HomeComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map