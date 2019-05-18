import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {



  productos:Producto[];
  nuevoProducto:Producto;
  dataSource;
  nombreBuscar:string;
  visible=false;
  constructor(private http: ProductoService, private router:Router, private app:AppComponent) { }

  ngOnInit() {
  }


  consultar(){
    this.http.consultarProductoTodo(this.nombreBuscar)
    .subscribe(data=>{
      this.productos=data;
      this.dataSource = new MatTableDataSource(this.productos);
    })
  }


    agregar(){
      this.visible=true;
      this.nuevoProducto=new Producto();
    }

    editar(row){
      this.visible=true;
      this.nuevoProducto=row;
    }

    guardarNuevo(){
      if(this.nuevoProducto.id==null){
      this.http.crearProducto(this.nuevoProducto)
      .subscribe(data=>{
        this.visible=false;
        alert("Cambios guardados exitosamente");
      })
    }else{
      this.http.modificarProducto(this.nuevoProducto)
      .subscribe(data=>{
        this.visible=false;
        alert("Cambios guardados exitosamente");
      })
    }
    }

    cancelarEdicion(){
      this.nuevoProducto=null;
      this.visible=false;
    }

}
