import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from '../../services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasaje : Pasaje;
  pasajes : Array<Pasaje>;
  precioDescuento: number=0;;
  precioTotal : number=0;
  mostrar: boolean= false;
  totalJ: number = 0;
  totalM: number = 0;
  totalA: number = 0;
  total: number = 0;

  constructor(private pasajeService : PasajeService) { 
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.refrescarPasaje();
  
  }

  ngOnInit(): void {
  }

  guardarPasaje(){
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.addPasaje(this.pasaje);
    this.limpiar();
    this.mostrar = false;
    this.precioDescuento = 0;
    this.precioTotal = 0;
    this.refrescarPasaje();
  }

  modificarPasaje(){
    this.pasajeService.updatePasaje(this.pasaje);
    this.limpiar();
    this.refrescarPasaje();
  }
  
  elegirPasaje(pasaje: Pasaje){
    this.pasaje = pasaje;
  }

  borrarPasaje(id: number){
    this.pasajeService.deletePasaje(id);
    this.refrescarPasaje();
  }

  refrescarPasaje(){
    this.pasajes = this.pasajeService.getPasajes();
  }

  cambio(){
    
    if(this.pasaje.categoriaPasajero == "Menor"){
      this.precioDescuento = this.pasaje.precioPasaje * 25 / 100;
      this.precioTotal = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrar = true;
    }
    
    if(this.pasaje.categoriaPasajero == "Jubilado"){
      this.precioDescuento = this.pasaje.precioPasaje *50 / 100;
      this.precioTotal = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrar = true;
    }

  }

  limpiar(){
    this.pasaje = new Pasaje();
  }


  mostrarResumen(){
    
    for(var i = 0 ; i < this.pasajes.length; i++){
      if(this.pasajes[i].categoriaPasajero == "Jubilado"){
        this.totalJ = this.totalJ + this.pasajes[i].precioPasaje; 
      } 
      if(this.pasajes[i].categoriaPasajero == "Adulto"){
        this.totalA = this.totalA + this.pasajes[i].precioPasaje;
      } 
      if(this.pasajes[i].categoriaPasajero == "Menor"){
        this.totalM = this.totalM + this.pasajes[i].precioPasaje; 
        
      } 
    } 
    this.total = this.totalJ + this.totalM + this.totalA;
  }
  
}
