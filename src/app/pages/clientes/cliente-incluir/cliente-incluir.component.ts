import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-incluir',
  templateUrl: './cliente-incluir.component.html',
  styleUrls: ['./cliente-incluir.component.html']
})
export class ClienteIncluirComponent implements OnInit{

    cliente: Cliente;

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
        this.cliente = new Cliente();
    }

    public salvar(form: NgForm): void{
        console.log(form);
        // this.messageService.clear;
        if(form.valid){
            this.clienteService.salvar(this.cliente);
            // this.messageService.add({severity: 'success', summary: 'Informação', detail: 'Cliente cadastrado com sucesso!'})
        }else{
            // this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Preencha os campos obrigatórios (*)!'});
            console.log('ERRO');
        }
    }
}
