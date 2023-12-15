import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from '../model/imovel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  cadastrarImovel(imovelData: any) {
    return this.http.post('http://localhost:8080/cadastrarImovel', imovelData);
  }

  listaImovel(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>('http://localhost:8080/listaImovel');
  }
}
