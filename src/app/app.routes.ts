import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'products/:id',
        component: ProductsComponent
    },
    {
        path:'**',
        component: HomeComponent
    }
];
