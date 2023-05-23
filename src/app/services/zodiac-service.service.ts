import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "./environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getZodiacSign(date: string): Observable<string> {
    const url = `${this.apiUrl}?date=${date}`;

    return this.http.get<string>(url);
  }
}
