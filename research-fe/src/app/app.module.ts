import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { BMIComponent } from './components/bmi/bmi.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BMIComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
