import { Component,  } from '@angular/core';
import { TopService } from '../services/top.service';
@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent  {
  public respuestaDeServicio:any[]=[]
  constructor(public peticion:TopService) { 

// como utilizar los datos que llegan de un servicio
this.peticion.buscar()
.subscribe(respuesta=>{
  this.respuestaDeServicio=respuesta.datos
  console.log(this.respuestaDeServicio)
})

  }

}
