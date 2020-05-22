import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  //datatable
  clients: Array<any>;
  name: '';
  email: "";
  age: 0;
  city: "";

  constructor() { 
    //inicializar array de objetos clients tipo json
    this.clients = [
      {
        "name": "Wing",
        "email": "tellus.eu.augue@arcu.com",
        "regDate": "2016-01-09T14:48:34-08:00",
        "city": "Paglieta",
        "age": 25
      },
      {
        "name": "Whitney",
        "email": "sed.dictum@Donec.org",
        "regDate": "2017-01-23T20:09:52-08:00",
        "city": "Bear",
        "age": 32
      },
      {
        "name": "Oliver",
        "email": "mauris@Craslorem.ca",
        "regDate": "2015-11-19T19:11:33-08:00",
        "city": "Bruderheim",
        "age": 31
      },
      {
        "name": "Vladimir",
        "email": "mi.Aliquam@Phasellus.net",
        "regDate": "2015-11-02T07:59:34-08:00",
        "city": "Andenne",
        "age": 50
      },
      {
        "name": "Maggy",
        "email": "ligula@acorciUt.edu",
        "regDate": "2017-02-25T15:42:17-08:00",
        "city": "HomprŽ",
        "age": 24
      },
      {
        "name": "Unity",
        "email": "Nunc.commodo@justo.org",
        "regDate": "2016-03-07T03:47:55-08:00",
        "city": "Ried im Innkreis",
        "age": 23
      }]
  }

  ngOnInit(): void {
  }

  guardarRegistro(){
    this.clients.push({ name: this.name, email: this.email, regDate: "", age: this.age, city: this.city });
    return false;
  }
  
}
