import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: 'app-pages',
	styleUrls: ['pages.component.scss'],
	templateUrl: 'pages.component.html',
})
export class PagesComponent {

    title = 'Angular Boilerplate';
    items: MenuItem[];

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void{
      this.items = [
        {
          label:'Clientes',
          items: [
            {
              label: 'Novo',
              icon: 'pi pi-fw pi-plus',
              routerLink: ['/incluir-cliente']
            },
            {
              label: 'Consultar',
              icon: 'pi pi-fw pi-search',
              routerLink: ['/consultar-cliente']
            }
          ]
        }
      ];
    }
}
