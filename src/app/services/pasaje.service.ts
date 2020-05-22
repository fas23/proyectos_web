import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';


@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  pasajes : Array<Pasaje>;

  constructor() { 
    this.pasajes = new Array<Pasaje>();
  }

  getPasajes(){
    return this.pasajes;
  }

  addPasaje(pasaje : Pasaje){
    pasaje.idPasaje = this.getIdDisponible();
    this.pasajes.push(pasaje);
  }

  updatePasaje(pasaje: Pasaje){
    var actualizarPasaje = this.pasajes.findIndex((item: Pasaje) => item.idPasaje == pasaje.idPasaje);
    this.pasajes.splice(actualizarPasaje, 1, pasaje);
  }

  deletePasaje(id: number){
    var idBorrar = this.pasajes.findIndex((item: Pasaje) => item.idPasaje == id);
    this.pasajes.splice(idBorrar, 1);
  }

  getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.pasajes.length; i++) {
      if (maxid < this.pasajes[i].idPasaje) {
        maxid = this.pasajes[i].idPasaje;
      }
    }

    return (maxid + 1);
  }

}
