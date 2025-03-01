import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PromptService {
  //private apiServerUrl = 'http://localhost:8080';
  private apiServerUrl = 'https://schnoeschnoe-be.onrender.com';

  constructor(private http: HttpClient) {}

  public time(schnoe_api_key: string): Observable<any> {
    let headers = new HttpHeaders().set('X-API-KEY', schnoe_api_key);

    return this.http.get(
      `${this.apiServerUrl}/time`, 
      { responseType: 'text',
        headers: headers
      }
    );
  }
}
