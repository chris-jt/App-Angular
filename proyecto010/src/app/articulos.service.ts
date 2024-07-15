import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }
  retornar() {
    return [
              {
                codigo: 1,
                descripcion: "papas",
                precio: 12.50
              },
              {
                codigo: 2,
                descripcion: "manzanas",
                precio: 54
              },
              {
                codigo: 3,
                descripcion: "sandía",
                precio: 14
              },
              {
                codigo: 4,
                descripcion: "peras",
                precio: 6.25
              }
           ];
  }
}
