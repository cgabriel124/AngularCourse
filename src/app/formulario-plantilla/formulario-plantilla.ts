import { Component } from '@angular/core';
import { Persona } from '../Interface/persona';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formulario-plantilla',
  imports: [FormsModule, JsonPipe],
  templateUrl: './formulario-plantilla.html',
  styleUrl: './formulario-plantilla.css'
})
export class FormularioPlantilla {
  envioRealizado = false;
  persona = {
    nombre:"",
    apellido: "",
    edad: ""
  }
  procesarFormulario() {
    console.log(this.persona);
    this.envioRealizado = true;
  }

}
