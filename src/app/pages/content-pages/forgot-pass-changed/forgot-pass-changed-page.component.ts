import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-forgot-pass-changed-page',
    templateUrl: './forgot-pass-changed-page.component.html',
    styleUrls: ['./forgot-pass-changed-page.component.scss']
})

export class ForgotPassChangedPageComponent {
    @ViewChild('f') forogtPasswordForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    // On submit click, reset form fields
    onSubmit() {
        this.forogtPasswordForm.reset();
    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}