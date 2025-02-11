import { Routes } from '@angular/router';
import { GridComponent } from './body/grid/grid.component';
import { TablaComponent } from './body/tabla/tabla.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'tarjetas', component: GridComponent },
    { path: 'tabla', component: TablaComponent },
    { path: '', redirectTo: 'tarjetas', pathMatch: 'full' } // Redirigir por defecto a 'tarjetas'
    ];
