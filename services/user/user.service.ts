import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService{
  baseUrl = "https://my-json-server.typicode.com/animeshroydev/SampleJSONPlaceholder/";


  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + "users");
  }
}