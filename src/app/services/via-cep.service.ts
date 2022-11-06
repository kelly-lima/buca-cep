import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEndereco } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  // apenas para leitura  
  private readonly baseURL: string = "https://viacep.com.br/ws/"
  constructor(
    private http: HttpClient
  )
  {}
  

  buscarCep(cep: string){
  return this.http.get<IEndereco>(`${this.baseURL}/${cep}/json`)
  }
}
