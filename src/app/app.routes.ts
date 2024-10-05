import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from  './auth/pages/login/login.component';  // Asegúrate de que la ruta sea correcta
import { RegistroComponent } from './auth/pages/registro/registro.component';  // Asegúrate de que la ruta sea correcta
import { PerfilComponent } from './features/pages/perfil/perfil.component';
// Definición de rutas
export const routes: Routes = [
    { path: 'home', component: HomeComponent }, // Página normal
    { path: 'index', component: IndexComponent }, // Página normal
    { path: 'login', component: LoginComponent }, // Ruta para el login
    { path: 'perfil', component: PerfilComponent }, // Ruta para el login
    { path: 'login', component: LoginComponent }, // Ruta para el login
    { path: 'registro', component: RegistroComponent }, // Ruta para el registro
];