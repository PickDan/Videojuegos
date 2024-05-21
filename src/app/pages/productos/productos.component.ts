import { Component, inject } from '@angular/core';
import { ProductosService } from '../../server/productos.service';
import { RouterLink } from '@angular/router';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  servicios = inject(ProductosService)
  productos: any

  ngOnInit(){
    this.servicios.getProductos().subscribe(n =>{
      this.productos = n
    })
  }

  
  }

