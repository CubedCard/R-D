import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public userForm!: FormGroup;
    private user! : User;

    constructor(private fb: FormBuilder, private service: UserService) {
        this.createForm();
    }

    ngOnInit(): void {
    }

    private createForm(): void {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
            weight: ['', [Validators.required, Validators.min(1), Validators.max(300)]],
            height: ['', [Validators.required, Validators.min(1), Validators.max(240)]],
        });
    }

    public onSubmit(): void {
        if (this.userForm.valid) {
            this.user = this.userForm.value;
            this.service.createUser(this.user);
            this.userForm.reset();
        } else {
            this.userForm.markAsTouched();
        } 
    }

}
