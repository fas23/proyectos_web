import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private _http: HttpClient) { }

  public getTeams():Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'free-nba.p.rapidapi.com',
        "X-Rapidapi-Key": '05edaf08fbmsh250c66977b2c786p115a0fjsn6ec5576f575a'
      })
    };
    return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
  }

}
