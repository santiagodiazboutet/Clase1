import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class mihttpclientService {
  private url = environment.urlpaises;
  public usuario;
  constructor(private http: HttpClient) { }

  public obtenerPaises(url) {
    return this.http.get(url);
  }
}
