import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-excluir',
  templateUrl: './cliente-excluir.component.html',
  styleUrls: ['./cliente-excluir.component.css']
})
export class ClienteExcluirComponent implements OnInit {

  public nome: string;

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
      this.nome = '';
    }
    
    excluirCliente(){
      this.clienteService.excluir(this.nome);
    }
    
    
}
