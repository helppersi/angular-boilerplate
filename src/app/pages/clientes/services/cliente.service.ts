import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public salvar(cliente: Cliente): void{
    localStorage.setItem(cliente.nome.toString(), JSON.stringify(cliente));
  }

//   public consultar(): Array<Cliente>{
//     let clientes: Array<Cliente> = [];
//     console.log(localStorage.length);
//     for(let i = 0; i < localStorage.length; i++){
//       const localKey: string | null = localStorage.key(i)
//       if(localKey){
//         const item: string | null = localStorage.getItem(localKey);
//         if(item){
//           clientes.push(JSON.parse(item));
//         }
//       }
//     }
//     return clientes;
//   }

//   public recuperar(cpf: string): Cliente{
//     const key: string | null = localStorage.getItem(cpf)
//     if(key){
//       return JSON.parse(key);
//     }
//     return new Cliente();
//   }
}
