export class Imovel {
    id: number;
    titulo: string;
    descricao: string;
    valorAluguel: number;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
  
    constructor(id: number, titulo: string, descricao:string, valorAluguel: number, cep: string, bairro:string, cidade:string, estado:string) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao
      this.valorAluguel = valorAluguel
      this.cep = cep
      this.bairro = bairro
      this.cidade = cidade
      this.estado = estado
    }
  }
  