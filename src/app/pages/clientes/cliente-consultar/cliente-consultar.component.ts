import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.css']
})
export class ClienteConsultarComponent implements OnInit {

    public clientes: Cliente[] = [];

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
      this.clientes = this.clienteService.consultar();
    }

}
