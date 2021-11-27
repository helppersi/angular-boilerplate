import { Component } from "@angular/core";

@Component({
	selector: 'app-pages',
	styleUrls: ['pages.component.scss'],
	templateUrl: 'pages.component.html',
})
export class PagesComponent {

    displayInserirCliente = false;
    displayConsultarCliente = false;
    displayListarCliente = false;
    displayExcluirCliente = false;

    mostrarComponenteInserirCliente(): void {
      if(this.displayInserirCliente){
        this.displayInserirCliente = false;
        this.displayConsultarCliente = false;
        this.displayListarCliente = false;
        this.displayExcluirCliente = false;
      }else{
        this.displayInserirCliente = true;
        this.displayConsultarCliente = false;
        this.displayListarCliente = false;
        this.displayExcluirCliente = false;
      }
    }
    mostrarComponenteListarCliente(): void {
      if(this.displayListarCliente){
        this.displayInserirCliente = false;
        this.displayConsultarCliente = false;
        this.displayListarCliente = false;
        this.displayExcluirCliente = false;
      }else{
        this.displayInserirCliente = false;
        this.displayConsultarCliente = false;
        this.displayListarCliente = true;
        this.displayExcluirCliente = false;
        }
    }
    mostrarComponenteConsultarCliente(): void {
        if(this.displayConsultarCliente){
          this.displayInserirCliente = false;
          this.displayConsultarCliente = false;
          this.displayListarCliente = false;
          this.displayExcluirCliente = false;
        }else{
          this.displayInserirCliente = false;
          this.displayConsultarCliente = true;
          this.displayListarCliente = false;
          this.displayExcluirCliente = false;
          }
    }

    mostrarComponenteExcluirCliente():void{
      if(this.displayExcluirCliente){
        this.displayInserirCliente = false;
          this.displayConsultarCliente = false;
          this.displayListarCliente = false;
          this.displayExcluirCliente = false;
        }else{
          this.displayInserirCliente = false;
          this.displayConsultarCliente = false;
          this.displayListarCliente = false;
          this.displayExcluirCliente = true;
      }
    }
}
