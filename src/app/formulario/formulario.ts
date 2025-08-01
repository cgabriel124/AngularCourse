import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  openAlert: boolean = false;
  mostrarEnConsola(name: string) {
    console.log(name);
    this.openAlert = true;
  }

}
