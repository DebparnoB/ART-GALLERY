import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    user.user_id = 0;
    return this.http.post<User>(this.apiUrl+"/addUser",user);
  }

  logIn(userEmail: string, userPassword: string): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/logIn?userEmail="+userEmail+"&userPassword="+userPassword, null);
  }

  logOut(): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"/logOut", null);
  }
}