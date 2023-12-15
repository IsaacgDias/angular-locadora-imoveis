import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../DataService/data.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  imovel: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.dataService.getImovelById(id).subscribe((data: any) => {
        this.imovel = data;
        
      });
    });
  }

  enviarFormulario() {
    const idDoImovel = this.imovel.id;
    this.dataService.editarImovelById(idDoImovel, this.imovel).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso!', response);
        this.router.navigate(['/lista']);
      },
      (error) => {
        console.error('Erro ao enviar dados', error);
        this.router.navigate(['/lista']); 
      }
    );
  }
}
