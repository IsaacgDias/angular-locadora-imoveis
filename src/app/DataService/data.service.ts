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

  deletarImovel(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deletarImovel?id=${id}`);
  }

  getImovelById(id: number): Observable<Imovel> {
    return this.http.get<Imovel>(`http://localhost:8080/getImovelById?id=${id}`);
  }

  editarImovelById(id: number, updatedImovel: Imovel): Observable<Imovel> {
    return this.http.put<Imovel>(`http://localhost:8080/editarImovel?id=${id}`, updatedImovel);
  }
  
  obterInformacoesCEP(cep: string) {
    return this.http.get(`http://localhost:8080/consultaCEP/${cep}`);
  }
}
