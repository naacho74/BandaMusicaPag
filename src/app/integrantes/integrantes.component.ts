import { Component} from '@angular/core';
import { Integrantes } from '../interfaces/integrantes';
@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

integrantes:Integrantes[]=[
{
 'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/ArchivosMusica%2FC.R.O.webp?alt=media&token=ced177e1-dd4e-4aae-b2cb-827fd1a2d2a1','nombre':'Tomás Manuel Campos','edad':22,'nacionalidad':'Argentino','instagram':'https://www.instagram.com/crocraxker/?hl=es-la','descripcion':'Tomás Manuel Campos, mejor conocido como C.R.O, es un rapero argentino de 22 años, nacido en la ciudad neuquina de Cutral Có; a muy corta edad ya acumula éxitos como "Ella es una G", "After house", "Lambo", "Money".'
},{'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/ArchivosMusica%2Fhomer.jpg?alt=media&token=e0012c6f-6bc2-4649-96fd-99e04d87fc51','nombre':'Lucas Dario Giménez','edad':32,'nacionalidad':'Argentino','instagram':'https://www.instagram.com/homer_elmeromero/?hl=es-la','descripcion':'Con el Rap como bandera, ha desarrollado su carrera musical al punto de ser considerado uno de los raperos más importantes de la escena argentina.'}



]

  constructor() { }


}
