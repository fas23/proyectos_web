import { Injectable } from '@angular/core';
import { PuntoInteres } from '../models/punto-interes';

@Injectable({
  providedIn: 'root'
})
export class PuntoService {

  puntosInteres: Array<PuntoInteres>;

  constructor() {
    this.puntosInteres = new Array<PuntoInteres>();
  }

  getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.puntosInteres.length; i++) {
      if (maxid < this.puntosInteres[i].id) {
        maxid = this.puntosInteres[i].id;
      }
    }

    return (maxid + 1);
  }

  getPuntos() {
    return this.puntosInteres;
  }

  addPunto(punto: PuntoInteres) {
    punto.id = this.getIdDisponible();
    this.puntosInteres.push(punto);

  }

  updatePunto(punto: PuntoInteres) {
    var actualizarPunto = this.puntosInteres.findIndex((item: PuntoInteres) => item.id == punto.id);
    this.puntosInteres.splice(actualizarPunto, 1, punto);
  }

  deletePunto(idPunto: number) { 
    var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres) => item.id == idPunto);
    this.puntosInteres.splice(idBorrar, 1);
  }

}
