import { Component } from '@angular/core';
import { Persona } from '../Interface/persona';

@Component({
  selector: 'app-bucles',
  imports: [],
  templateUrl: './bucles.html',
  styleUrl: './bucles.css'
})
export class Bucles {
  //Array de Persona(interface)
  personas: Persona[] = [
    {
      id: 1,
      nombre: "Gabriel",
      apellido: "Nazate",
      edad: 23
    },
    {
      id: 2,
      nombre: "Christian",
      apellido: "Tapia",
      edad: 24
    },
    {
      id: 3,
      nombre: "Hugo",
      apellido: "Perez",
      edad: 24
    }
  ]

}
