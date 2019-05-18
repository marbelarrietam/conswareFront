import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl:string="http://localhost:8090/clientes";

  constructor(private http:HttpClient) { }

crearCliente(cliente){
  return this.http.post<Cliente[]>(this.baseUrl, cliente);
}


consultarClientesTodo(nombre){
  return this.http.get<Cliente[]>(this.baseUrl+'/'+nombre);
}

modificarCliente(cliente){
  return this.http.put<Cliente[]>(this.baseUrl, cliente);
}

}
