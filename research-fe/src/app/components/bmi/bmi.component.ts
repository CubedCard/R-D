import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { BMIService } from '../../services/bmi.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-bmi',
    templateUrl: './bmi.component.html',
    styleUrls: ['./bmi.component.scss']
})
export class BMIComponent implements OnInit {
    public displayedColumns: string[] = ['name', 'age', 'weight', 'height'];
    public dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
    public bmiForm!: FormGroup;
    public currentName: string = '';
    public currentBMI: number | undefined = undefined;


    constructor(private service: BMIService, private userService: UserService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((data: User[]) => {
            this.dataSource.data = data;
        });
        this.createForm();
    }

    private createForm(): void {
        this.bmiForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    public onSubmit(): void {
        if (this.bmiForm.valid) {
            this.currentName = this.bmiForm.value.name;
            this.service.calculateBMI(this.bmiForm.value.name).then((data: number) => {
                if (!isNaN(data)) {
                    this.currentBMI = Math.round(data * 10) / 10;
                } else {
                    this.currentBMI = undefined;
                }
            });
        } else {
            this.bmiForm.markAllAsTouched();
        }
    }

}
