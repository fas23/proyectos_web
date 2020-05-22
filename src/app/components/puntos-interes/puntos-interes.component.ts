import { Component, OnInit } from '@angular/core';
import { PuntoInteres } from '../../models/punto-interes';
import { PuntoService } from '../../services/punto.service';

@Component({
  selector: 'app-puntos-interes',
  templateUrl: './puntos-interes.component.html',
  styleUrls: ['./puntos-interes.component.css']
})
export class PuntosInteresComponent implements OnInit {

  puntoInteres : PuntoInteres;
  puntosInteres : Array<PuntoInteres>;
  urlTest : string;

  constructor(private puntoService: PuntoService) { 
    this.puntoInteres = new PuntoInteres();
    this.urlTest = "http://www.google.com/maps/place/";
    this.puntosInteres = new Array<PuntoInteres>();
    this.refrescarPuntos();
  }

  ngOnInit(): void {
  }

  actualizarUrlTest(){
    this.urlTest = "http://www.google.com/maps/place/" + this.puntoInteres.latitud + "," + this.puntoInteres.longitud;
  }

  refrescarPuntos(){
    this.puntosInteres = this.puntoService.getPuntos();
  }

  guardarPunto(){
    //this.puntosInteres.push(this.puntoInteres);
    this.puntoInteres.ultimaModificacion = new Date();
    this.puntoService.addPunto(this.puntoInteres);
    this.refrescarPuntos();
    this.puntoInteres = new PuntoInteres();
  }

  elegirPunto(punto: PuntoInteres){
    this.puntoInteres = punto;
  }

  modificarPunto(){
    this.puntoService.updatePunto(this.puntoInteres);
    this.limpiarPunto();
    this.refrescarPuntos();
  }

  borrarPunto(id: number){
    this.puntoService.deletePunto(id);
    this.refrescarPuntos();
  }

  limpiarPunto(){
    this.puntoInteres = new PuntoInteres();
  }
}
