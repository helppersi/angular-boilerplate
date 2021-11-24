import { ClienteIncluirComponent } from './clientes/cliente-incluir/cliente-incluir.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
        children: [
			{
				path: 'cliente-incluir',
				component: ClienteIncluirComponent,
			},
        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
