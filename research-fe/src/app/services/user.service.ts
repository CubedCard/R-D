import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>('/api/users/all');
    }

    public createUser(user: User): void {
        this.postUser(user).subscribe((result) => {
            console.log(result);
        });
    }

    private postUser(user: User): Observable<boolean> {
        return this.http.post<boolean>('/api/users', user);
    }
}
