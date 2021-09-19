import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { OAuth } from '../models/oAuth,model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = environment.API;
  constructor(private http: HttpClient) { }

  public login(auth: Auth): Observable<OAuth> {
    return this.http.post<OAuth>(`${this.API}/auth/login`, {
      username: auth.username,
      password: auth.password
    });
  }

  handleSession(response): void {
    if (response['token']) {
      sessionStorage.setItem('token', response['token']);
    }
  }

  remember(auth: Auth): void {
    if (auth.remember) {
      localStorage.setItem('username', auth.username);
    }
  }

  validateSession(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  logOut(): void {
    sessionStorage.clear();
  }

  /**
   * Get authorization header
   * @returns 
   */
   getHeader(): HttpHeaders{
    const header = new HttpHeaders();
    return header.append('Authorization',`Bearer ${ sessionStorage.getItem('token') }`);
  }
}
