import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
        PagesRoutingModule,
        ThemeModule,
		FormsModule
	],
	declarations: [
		PagesComponent,
	],
	providers: []
})
export class PagesModule { }
