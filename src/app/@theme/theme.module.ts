
import { NgModule } from "@angular/core";
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ExampleComponent } from "../pages/example/example.component";
import { FormsModule } from "@angular/forms";
import { ClientesComponent } from './components/clientes/clientes.component';
import { CommonModule } from '@angular/common';
import { UpdateClientDataComponent } from './components/update-client-data/update-client-data.component';

@NgModule({
	declarations: [
		CadastroComponent,
		ExampleComponent,
		ClientesComponent,
		UpdateClientDataComponent
	],
	providers: [],
    exports: [
		CadastroComponent,
		ExampleComponent,
        ClientesComponent,
        UpdateClientDataComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
    ]

})
export class ThemeModule { }
