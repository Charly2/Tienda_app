import { Component } from '@angular/core';
import {Producto } from  '../../services/producto'
import { ProductosService } from '../../services/producto.service';
import { NavController } from 'ionic-angular';
import { DetallePage} from '../detalle/detalle'


@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {
  lista : Producto[];


  constructor(public navCtrl: NavController, private servicio :ProductosService) {
    this.getProducto();
  }

  getProducto(){
    this.servicio.getProdcutos().subscribe(rs =>{this.lista=rs,console.log(rs)} ,er => console.log(er),() => console.log(this.lista));
  }


  onClick(item,nombre){

    this.navCtrl.push(DetallePage,{'id': item,'nombre':nombre})
  }

}
