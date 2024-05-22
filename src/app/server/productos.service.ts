import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {}
  private API_PRODUCTOS = "http://localhost:3000/juegos"

  //OBTENER PRODUCTOS
  getProductos(): Observable <any>{
    return this.http.get(this.API_PRODUCTOS)
  }
  //OBTENER PRODUCTOS POR ID
  getProductosID(id:any): Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
  }
  //FUNCIÓN AGREGAR AL CARRITO, //INCOMPLETO
  agregarCarrito(producto:any):Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${producto}`)
  }
  //AGREGAR JUEGOS A LA BASE DE DATOS
  postProductos(juegos:JSON):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, juegos)
  }
  //ELIMINAR VIDEOJUEGOS
  deleteJuego(id:any): Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
  }
  //EDITAR VIDEOJUEGOS
  editarJuego(juego:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/${juego.id}`, juego)
  }
}
