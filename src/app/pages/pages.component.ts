import { Component } from "@angular/core";

@Component({
	selector: 'app-pages',
	styleUrls: ['pages.component.scss'],
	templateUrl: 'pages.component.html',
})
export class PagesComponent {

    displayInserirCliente = false;
    displayConsultarCliente = false;

    inserirCliente(): void {
      if(this.displayInserirCliente){
        this.displayInserirCliente = false;
      }else{
        this.displayInserirCliente = true;
      }
    }

    consultarCliente(): void {
        if(this.displayConsultarCliente){
            this.displayConsultarCliente = false;
          }else{
            this.displayConsultarCliente = true;
          }
      }
}
