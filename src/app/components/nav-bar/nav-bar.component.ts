import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

    ruta = inject(Router)
    cerrarSesion(){
      localStorage.removeItem('token')
      this.ruta.navigateByUrl('home')
      
    }

    vista = localStorage.getItem('token')
}
