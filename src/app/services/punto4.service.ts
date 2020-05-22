import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Punto4Service {

palabrasService : Array<any>;

  constructor() { 
    this.palabrasService = [
      {
        "palabra_ingles": "lion",
        "palabra_espanol" : "leon",
        "url_imagen" : "assets/img/leon.jpg"
      },
      {
        "palabra_ingles": "tiger",
        "palabra_espanol" : "tigre",
        "url_imagen" : "assets/img/tigre.png"
      },
      {
        "palabra_ingles": "deer",
        "palabra_espanol" : "ciervo",
        "url_imagen" : "assets/img/ciervo.jpg"
      },
      {
        "palabra_ingles": "dog",
        "palabra_espanol" : "perro",
        "url_imagen" : "assets/img/perro.jpg"
      },
      {
        "palabra_ingles": "dolphin",
        "palabra_espanol" : "delfin",
        "url_imagen" : "assets/img/delfin.jpg"
      },
      {
        "palabra_ingles": "rhinoceros",
        "palabra_espanol" : "rinoceronte",
        "url_imagen" : "assets/img/rinoceronte.jpg"
      },
      {
        "palabra_ingles": "elephant",
        "palabra_espanol" : "elefante",
        "url_imagen" : "assets/img/elefante.jpg"
      },
      {
        "palabra_ingles": "eagle",
        "palabra_espanol" : "aguila",
        "url_imagen" : "assets/img/aguila.jpg"
      },
      {
        "palabra_ingles": "duck",
        "palabra_espanol" : "pato",
        "url_imagen" : "assets/img/pato.jpg"
      },
      {
        "palabra_ingles": "flamingo",
        "palabra_espanol" : "flamenco",
        "url_imagen" : "assets/img/flamenco.jpg"
      }
      
    ]
  }

  getPalabras(){
    return this.palabrasService;
  }
}
