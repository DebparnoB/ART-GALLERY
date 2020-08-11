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

  addUser(user: User): Observable<boolean> {
    user.user_id = 0;
    return this.http.post<boolean>(this.apiUrl+"/addUser",user);
  }
}
