import { Component, inject } from '@angular/core';
import { ProductosService } from '../../server/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  id:any
  nombre:any
  precio:any
  genero:any
  imagen:any

  servicios = inject(ProductosService)

  ruta = inject(Router)

  router = inject(ActivatedRoute)

  ngOnInit(){
    this.router.params.subscribe(p=>{
      this.servicios.getProductosID(p['idEditar']).subscribe(r=>{
        this.id = r.id
        this.nombre = r.nombre
        this.precio = r.precio
        this.genero=r.genero
        this.imagen=r.imagen
      })
    })
  }

  editar(datos:any){
    this.servicios.editarJuego(datos.value).subscribe()
      this.ruta.navigateByUrl("productos")
  }
}
