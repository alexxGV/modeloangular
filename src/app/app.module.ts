import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { CalculoComponent } from './components/calculo/calculo.component';

//IMPORTACIONES DE ROUTING
import { appRoutingProviders, routing } from './app.routing';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
//DEBO METER appRoutingProviders A providers
//routing A IMPORTS

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    CalculoComponent,
    ListaproductosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
