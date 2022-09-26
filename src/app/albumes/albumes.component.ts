import { Component,  } from '@angular/core';
import { SpotyService } from '../services/spoty.service';
@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent  {
  public canciones:any[]=[]
  constructor(public peticion:SpotyService) { 

// como utilizar los datos que llegan de un servicio
this.peticion.traerCanciones()

.subscribe(respuesta=>{
  this.canciones=respuesta.tracks
  console.log(this.canciones)
})

  }

}
