import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from "../appService.service";
import { User } from "../entities";
import { AppAction } from "../types";

@Component({
    selector: 'app-shell',
    templateUrl: 'App_Source/app/shell/shell.component.html'
})
export class ShellComponent implements OnInit {

    me: User;

    actions: AppAction[] = new Array<AppAction>();

    navDialogRef: NgbModalRef = null;

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService,
        @Inject(forwardRef(() => NgbModal)) private modalService: NgbModal) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.me = user;
            this.actions = this.appService.getAppActions(this.me);
        });
    }

    openModal(dialog) {
        this.navDialogRef = this.modalService.open(dialog, {size:"sm"});

        this.navDialogRef.result.then((result) => {
            //console.log( `Closed with: ${result}` );
        }, (reason) => {
            //console.log( `Dismissed ${this.getDismissReason(reason)}` );
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    navDialogNavigate(action: AppAction): void {
        if (this.navDialogRef != null) {
            this.navDialogRef.dismiss("Navigating: " + action.route);
            document.location.href = `/#${action.route}`;
        }
    }
}
