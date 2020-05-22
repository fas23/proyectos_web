import { Component, OnInit } from '@angular/core';
import { Team } from './../../models/team';
import { NbaService } from '../../services/nba.service';


@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  teams: Array<Team>;
  team: Team;


  constructor(private nbaService: NbaService) {
    this.cargarTeams();
  }

  ngOnInit(): void {
  }

  cargarTeams(){
    this.nbaService.getTeams().subscribe( 
      (result) => {
          //es necesario que convierta el JSON que
          this.teams = new Array<Team>(); 
          result['data'].forEach(element => {
            this.team = new Team(); 
            Object.assign(this.team,element);
            this.teams.push(this.team);
          });
          console.log(this.teams);
      }, 
      error => { alert("Error en la petición"); } )
  }
 
}
