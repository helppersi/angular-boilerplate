import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
    @Input() clientes: any[] = [];

    constructor(private storage: LocalStorageService){}

    ngOnInit(): void {
        this.storage.getObservable().subscribe(()=>{
            this.clientes = JSON.parse(this.storage.readItem('clientes'));
        });
    }

}
