import { Component, inject } from '@angular/core';
import { ProductosService } from '../../server/productos.service';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ProductosService)
  visualizar = localStorage.getItem('token')
  juegos : any

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.juegos = p
    })
  }


  id:any
  nombre:any
  precio:any
  genero:any
  imagen:any

  agregarProducto(datos: NgForm){
    console.log(datos.value);
    this.servicio.postProductos(datos.value).subscribe()
  }

  
  delete(id:any){
    this.servicio.deleteJuego(id).subscribe()
    alert("Usuario eliminado")
  }
  
}
