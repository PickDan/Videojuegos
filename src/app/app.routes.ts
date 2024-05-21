import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ErrorComponent } from './pages/error/error.component';
import { combineLatest } from 'rxjs';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'terminos', component: TerminosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'detalles/:idDetalles', component: DetallesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ErrorComponent},






    
];