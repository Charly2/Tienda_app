import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import {ProductosService}from '../../services/producto.service'
import { Producto} from '../../services/producto'
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {
  id : string;
  nombre : String;
  producto : Producto[];
  constructor(public navCtrl: NavController, public  navParams : NavParams,private servicio :ProductosService) {
    let id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    console.log('el id es : ' + this.nombre)
    this.cargarDetalle(id);
  }

  cargarDetalle(id){
    this.servicio.getProduto(id).subscribe(rs => {this.producto = rs;console.log(this.producto)}, er => console.log(er), ()=> {console.log(this.producto)})
  }


}
