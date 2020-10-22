import { Component, OnInit } from '@angular/core';
import { MapService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: number = 0;
  lng: number = 0;
  country: string = '';
  confirmed: number;
  dead: number;
  recovered: number;
  paths = new Array(); 
  location: Object;
  arrayLng: any = new Array();
  arrayLat: any = new Array();
  
  constructor(private map: MapService) {}

  ngOnInit(){    
    this.map.getLocation().subscribe(data => {
      console.log()
      for(let i=0; i< data.data.length; i++ ){
        if(data.data[i].country_code === "us"){
          this.lat = data.data[i].latitude;
          this.lng = data.data[i].longitude;
          this.confirmed = data.data[i].confirmed;
          this.dead = data.data[i].dead;
          this.recovered = data.data[i].recovered;
          this.country = data.data[i].location;
        }        
      }     
    })

    /*this.map.getAl().subscribe(info => {
      for(let i=0;i<info.coordinates[0][0].length; i++){
        if(info.coordinates[0][0][i][0]){
          this.arrayLat.push(info.coordinates[0][0][i][0])
        }  
        if(info.coordinates[0][0][i][1]){
          this.arrayLng.push(info.coordinates[0][0][i][1])
        }  
        this.paths.push({lat:this.arrayLat[i],lng:this.arrayLng[i]})
      }             
    }) */
  }

  mouseOver(infoWindow:any){   
    infoWindow.open()
  }

  mouseout(infoWindow:any){
    infoWindow.close()
  }
}

