import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];
  nuevoCliente:Cliente;
  dataSource;
  nombreBuscar:string;
  visible=false;
  constructor(private http: ClienteService, private router:Router, private app:AppComponent
    ) { }

    displayedColumns = ['nombre', 'apellido', 'email','direccion','telefono','acciones'];

  ngOnInit() {

  }

  consultar(){
    this.http.consultarClientesTodo(this.nombreBuscar)
    .subscribe(data=>{
      this.clientes=data;
      this.dataSource = new MatTableDataSource(this.clientes);
    })
  }


    agregar(){
      this.visible=true;
      this.nuevoCliente=new Cliente();
    }

    editar(row){
      this.visible=true;
      this.nuevoCliente=row;
    }

    guardarNuevo(){
      if(this.nuevoCliente.id==null){
      this.http.crearCliente(this.nuevoCliente)
      .subscribe(data=>{
        this.visible=false;
        alert("Cambios guardados exitosamente");
      })
    }else{
      this.http.modificarCliente(this.nuevoCliente)
      .subscribe(data=>{
        this.visible=false;
        alert("Cambios guardados exitosamente");
      })
    }
    }

    cancelarEdicion(){
      this.nuevoCliente=null;
      this.visible=false;
    }
  }



