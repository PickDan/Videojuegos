import { Component, inject } from '@angular/core';
import { ProductosService } from '../../server/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ProductosService)

  juegos : any

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.juegos = p
    })
  }
  agregar(){
    console.log("Agregado");
    
  }
}
