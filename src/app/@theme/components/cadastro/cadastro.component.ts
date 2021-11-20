import { DadosCliente } from './../../interfaces/dadosCliente';
import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent{
    private id: number = 1;
    name: string;
    email: string;
    phone: string;
    private listaCadastro: DadosCliente[] = []
    private localStorage: LocalStorageService;
    private chave: string = 'clientes';

    constructor(localStorage: LocalStorageService){
        this.localStorage = localStorage;
    }

    public cadastrar(): void{
        const client = this.buildData();
        this.updateList(this.chave);
        this.listaCadastro.push(client);

        this.localStorage.createItem(this.chave, JSON.stringify(this.listaCadastro));
        this.cleanForm();
    }

    private buildData(): DadosCliente{
        const client = {name: this.name, email: this.email, phone: this.phone};
        this.geraId();
        return {...client, status: 'Ativo', id:this.id};
    }

    private updateList(key:string): any{
        const listaSalva = JSON.parse(this.localStorage.readItem(key));
        if(listaSalva){
            this.listaCadastro = listaSalva;
        }
    }

    private geraId(): any{
        const itens = JSON.parse(this.localStorage.readItem(this.chave));
        if(itens){
            const item = itens[itens.length - 1].id;
            this.id = item + 1;
        }
    }

    private cleanForm(): void{
        this.name = '';
        this.email = '';
        this.phone = '';
    }
}
