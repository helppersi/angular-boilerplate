import { DadosCliente } from './../../interfaces/dadosCliente';
import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-delete-client-data',
  templateUrl: './delete-client-data.component.html',
  styleUrls: ['./delete-client-data.component.css']
})
export class DeleteClientDataComponent {
    public id:number

    storage: LocalStorageService;
    constructor(storage: LocalStorageService) {
        this.storage = storage;
    }

    private getClients(): DadosCliente[]{
        return JSON.parse(this.storage.readItem('clientes'));
    }

    private searchId(id:number, lista:DadosCliente[]): DadosCliente{
        const item = lista.find(element => element.id == id);
        return item;
    }

    public deleteData(): void{
        const listaClients: DadosCliente[] = this.getClients();
        const client: DadosCliente = this.searchId(this.id, listaClients);
        if(client){
            const indexClient = listaClients.indexOf(client);
            listaClients.splice(indexClient, 1);

            this.storage.createItem('clientes', JSON.stringify(listaClients));
        }
    }


}
