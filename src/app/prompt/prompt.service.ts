import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PromptService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) {}

  public time(): Observable<any> {
    let headers = new HttpHeaders().set('X-API-KEY', '');

    return this.http.get(
      `${this.apiServerUrl}/time`, 
      { responseType: 'text',
        headers: headers
      }
    );
  }
}
