import { Component, OnInit } from '@angular/core';
import { Imovel } from '../model/imovel';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  imoveis: Imovel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.carregarImoveis();
  }

  carregarImoveis(): void {
    this.dataService.listaImovel().subscribe(
      (dataService: Imovel[]) => {
        this.imoveis = dataService;
      },
      (error) => {
        console.error('Erro ao carregar imóveis:', error);
      }
    );
  }
}

