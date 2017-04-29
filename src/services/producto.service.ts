/**
 * Created by Charly on 28/04/2017.
 */
import { Injectable} from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Producto } from "./producto";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductosService{
  private headers = new Headers({'Content-Type':'application/json'});
  private urlP = 'http://192.168.0.16:3000/producto';
  constructor(private http:Http){  }

  getProdcutos(): Observable<Producto[]>{
    let url = `${this.urlP}`;
    return this.http.get(url).map(r=> r.json()).catch(this.handleError);
  }

  getProduto(id): Observable<Producto[]>{
    let url = `${this.urlP}`+'/'+id;

    return this.http.get(url).first().map(r=> r.json()).catch(this.handleError);
  }


  private handleError (error : Response | any  ){
    let  errMsg: string;
    if (error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
