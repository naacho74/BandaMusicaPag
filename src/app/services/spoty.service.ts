import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotyService {

    uri:string='https://api.spotify.com/v1/artists/5Q2fyL2TcdUY9IqKTkGk5G/top-tracks?market=US'
  token:string= 'Bearer BQAdAXbXcjMUENdMXYdJKNU92Mct2LCSFAVFinepNjTwLKJehy8nL7iYdHUC8iue6SvcrloqfnfakCfuRUo1icjPvNkfISflShpdbMAff-uZbCRo7PZE3_DKtiFrKm39Ybdz39pyoMMVxypT5bHr2ZDelWkQe90FejcoGjkyJBWJ1m5dtFaC0i_zGRODCIPIa_Q'
  
  constructor(public peticion:HttpClient) {
    console.log("arrancando servicio")
   }

  public traerCanciones():Observable <any> {

    const httpOptions = {
      headers: new HttpHeaders({
        
        Authorization: this.token
      })
    };
    return this.peticion.get(this.uri,httpOptions)
  }
}
