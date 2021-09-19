import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { OAuth } from '../models/oAuth,model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BulkService {
  private API = environment.API;
  constructor(private http: HttpClient, private authService: AuthService) { }

  public bulkData(file: File): Observable<any> {
    var formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.API}/files/massiveLoading`,
    formData,
    {'headers': this.authService.getHeader()});
  }
}
