import { Component, OnInit } from '@angular/core';
import { Imovel } from '../model/imovel';
import { DataService } from '../DataService/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  imoveis: Imovel[] = [];

  constructor(private dataService: DataService, private router:Router) { }

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

  deletarImovel(id: number) {
    this.dataService.deletarImovel(id).subscribe(
      () => {
        console.log('Imóvel deletado com sucesso');
        // Remover o imóvel da lista local
        this.imoveis = this.imoveis.filter(imovel => imovel.id !== id);
        this.carregarImoveis();
      },
      (error) => {
        console.log('Erro ao deletar imóvel', error);
        this.carregarImoveis();
      }
    );
  }

  irParaPaginaEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }

}  


