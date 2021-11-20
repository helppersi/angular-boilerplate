import { DadosCliente } from './../../interfaces/dadosCliente';
import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-update-client-data',
  templateUrl: './update-client-data.component.html',
  styleUrls: ['./update-client-data.component.css']
})
export class UpdateClientDataComponent{
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    private storage: LocalStorageService

    constructor(storage:LocalStorageService){
        this.storage = storage;
    }

    private getClients(): DadosCliente[]{
        return JSON.parse(this.storage.readItem('clientes'));
    }

    private searchId(id:number, lista:DadosCliente[]): DadosCliente{
        const item = lista.find(element => element.id == id);
        return item;
    }

    private changeData(client):void{
        client.name = this.name;
        client.email = this.email;
        client.phone = this.phone;
        client.status = this.status;
    }

    public updateClient(): void{
        const listaClients: DadosCliente[] = this.getClients();
        const client: DadosCliente = this.searchId(this.id, listaClients);
        if(client){
            this.changeData(client);

            const indexClient = listaClients.indexOf(client);
            listaClients[indexClient] = client;

            this.storage.createItem('clientes', JSON.stringify(listaClients));
        }
    }

}
