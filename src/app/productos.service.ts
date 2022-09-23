import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './types';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
  getProducto():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url)
  }
}
