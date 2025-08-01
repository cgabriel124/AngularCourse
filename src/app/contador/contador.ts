import { Component } from '@angular/core';
import { Persona } from '../Interface/persona';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  personaGabriel: Persona = {
    id: 1,
    nombre: "Gabriel",
    apellido: "Nazate",
    edad: 23
  }
  numero: number = 1;

  disminuir() {
    this.numero -= 1;
    //this.numero--;
  }

  aumentar() {
    this.numero = this.numero + 1;
    //this.numero++; //tambien se puede
  }




}
