import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_VIACEP = 'http://viacep.com.br/ws';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  constructor(private http : HttpClient) { }

  public getEndereco(cep:string){
    return this.http.get(`${URL_VIACEP}/${cep}/json/`);
  }
}
