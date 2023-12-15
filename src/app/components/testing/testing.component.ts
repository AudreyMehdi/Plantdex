import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
   
              
    const urlApi = "https://reqres.in/api/users?page=1";
    fetch(urlApi)
      .then((reponse) => {
        return reponse.json();
      })
      .then((reponseJson) => {
        console.log(reponseJson);

    
      });
    
            

  }



}
