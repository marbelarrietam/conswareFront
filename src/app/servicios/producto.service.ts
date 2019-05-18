import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl:string="http://localhost:8090/productos";

  constructor(private http:HttpClient) { }

  crearProducto(producto){
    return this.http.post<Producto[]>(this.baseUrl, producto);
  }
  
  
  consultarProductoTodo(nombre){
    return this.http.get<Producto[]>(this.baseUrl+'/'+nombre);
  }
  
  modificarProducto(producto){
    return this.http.put<Producto[]>(this.baseUrl, producto);
  }
  
}
