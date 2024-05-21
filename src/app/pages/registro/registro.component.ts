import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../server/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  service = inject(LoginService)

  email: any
  password: any
  //nombre:any
  //edad:any
  //genero:any
  token: any

  registrarse(datos : any){
      this.service.postRegistro(datos.value).subscribe(p=>{
        this.token = p.accessToken
        
        if (this.token != '') {
          localStorage.setItem("token", 'true')
          //this.ruta.navigateByUrl('privado')
          window.location.href = 'login'
        }
      })
  }
}
