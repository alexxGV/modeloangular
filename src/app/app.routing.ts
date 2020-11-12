import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CalculoComponent } from './components/calculo/calculo.component';

const appRoutes: Routes = [
    { path: "calculo/:numero", component: CalculoComponent }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);