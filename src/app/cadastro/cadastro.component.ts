import { Component } from '@angular/core';
import { DataService } from '../DataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  imovel = {
    titulo: '',
    descricao: '',
    valorAluguel: 0,
    cep: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private dataService: DataService, private router: Router) { }

  enviarFormulario() {
    this.dataService.cadastrarImovel(this.imovel).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso!', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erro ao enviar dados', error);
        this.router.navigate(['/home']); 
      }
    );
  }
}

