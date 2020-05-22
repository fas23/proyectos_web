import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Punto4Service } from '../../services/punto4.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  palabraUsuario;
  palabras: Array<any>; 
  indiceAleatorio: number;
  palabra: String;
  palIngles: String = "Inicie Juego";
  palEspanol: String = "Inicie Juego";
  imagen: String= "assets/img/portada.jpg";
  contadorPalabra : number = 0;
  boton: boolean = true;
  
  constructor(private palabraService : Punto4Service) {   
    this.obtenerPalabras();
  }

  ngOnInit(): void {
  }

  obtenerPalabras(){
    this.palabras = this.palabraService.getPalabras();
  }

  iniciarJuego(){
    this.indiceAleatorio = Math.floor(Math.random() * this.palabras.length);  
    this.palabra = this.palabras[this.indiceAleatorio];

    this.palEspanol = this.palabra["palabra_espanol"];
    this.palIngles = this.palabra["palabra_ingles"];
    this.imagen = this.palabra["url_imagen"];
    this.boton = false;
  }

  verificarPalabra(){
    
    if(this.palabraUsuario === this.palabra["palabra_ingles"]){
      alert("palabra correcta");
      this.contadorPalabra++;
      this.iniciarJuego();
      console.log(this.contadorPalabra);
      this.palabraUsuario = "";
    }else{
      alert("palabra incorrecta");
      this.palabraUsuario = "";
    }
  }
}
