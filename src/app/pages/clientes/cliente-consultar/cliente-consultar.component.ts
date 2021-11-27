import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.css']
})
export class ClienteConsultarComponent implements OnInit {

  public cliente: Cliente;
  public clienteRetorno: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  consultarCliente(){
    console.log(this.cliente.nome);
    this.clienteRetorno = this.clienteService.consultar(this.cliente.nome);
  }
}
