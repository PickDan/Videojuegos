import { Component, inject } from '@angular/core';
import { ProductosService } from '../../server/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  servicios = inject(ProductosService)
  id: any

  

  ruta = inject(ActivatedRoute)

  productos:any

  ngOnInit(){
    this.ruta.params.subscribe(p =>{
      this.id = p['idDetalles']
      this.servicios.getProductosID(this.id).subscribe(r=>{
        this.productos = r
      })
    })
  }
  

  

}
