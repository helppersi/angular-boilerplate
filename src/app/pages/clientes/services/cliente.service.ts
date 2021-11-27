import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public salvar(cliente: Cliente): void{
    localStorage.setItem(cliente.nome.toString(), JSON.stringify(cliente));
  }

  public listar(): Cliente[]{
    const clientes: Cliente[] = [];
    for(let i = 0; i < localStorage.length; i++){
      const localKey: string | null = localStorage.key(i);
      if(localKey){
        const item: string | null = localStorage.getItem(localKey);
        if(item){
          const cliente: Cliente = JSON.parse(item);
          clientes.push(cliente);
        }
      }
    }
    return clientes;
  }

  public consultar(nome: string): Cliente{
    const key: string | null = localStorage.getItem(nome)
    if(key){
      return JSON.parse(key);
    }
    return new Cliente();
  }

  public excluir(nome: string): void{
    // let clientes: Array<Cliente> = this.listar();
    // clientes.forEach(cliente => {
    //   clientes.splice(1);
    // });
    // let item = document.getElementById("idLinhaConteudo"+ this.listarCliente);
    // item.parentNode.removeChild(item);
    localStorage.removeItem(nome);
  }
}