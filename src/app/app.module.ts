import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { CalculoComponent } from './components/calculo/calculo.component';

//IMPORTACIONES DE ROUTING
import { appRoutingProviders, routing } from './app.routing';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijocontadorComponent } from './components/hijocontador/hijocontador.component';
import { PadrecontadoresComponent } from './components/padrecontadores/padrecontadores.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
//DEBO METER appRoutingProviders A providers
//routing A IMPORTS

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    CalculoComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijocontadorComponent,
    PadrecontadoresComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
