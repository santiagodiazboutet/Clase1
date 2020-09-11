import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class mihttpclientService {
  public usuario;
  constructor(private http: HttpClient) { }

  public obtenerPaises(url) {
    return this.http.get(url);
  }
}
