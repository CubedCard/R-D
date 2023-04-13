import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BMIService {

    constructor(private http: HttpClient) { }

    public calculateBMI(name: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.postBMI(name).subscribe((data: number) => {
                resolve(data);
            });
        });
    }

    private postBMI(name: string): Observable<number> {
        return this.http.get<number>(`/api/bmi/${name}`);
    }

}
