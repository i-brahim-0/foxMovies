import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private _HttpClient: HttpClient) {}
  ngOnInit(): void {}

  register(formData: any): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=e0d6ea97909432f7ff4408e21d535b86'
    );
  }
}
