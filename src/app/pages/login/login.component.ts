import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../server/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service = inject(LoginService)

  email: any
  password: any
  token: any

  iniciarLogin(formulario : any){
      this.service.postLogin(formulario.value).subscribe(p=>{
        this.token = p.accessToken
        
        if (this.token != '') {
          localStorage.getItem('true')
          window.location.href = 'home'
          alert("Hola ususario")
        }
      })
  }

}
