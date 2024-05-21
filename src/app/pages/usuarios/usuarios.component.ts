import { Component, inject } from '@angular/core';
import { LoginService } from '../../server/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
    servicio = inject(LoginService)

    email:any
    password:any
    usuario:any

    

    ngOnInit(){
      this.servicio.getUsuarios().subscribe(p=>{
        this.usuario = p
      })
    }
}
