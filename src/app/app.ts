import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from "./contador/contador";
import { Botones } from "./botones/botones";
import { Formulario } from "./formulario/formulario";
import { Bucles } from "./bucles/bucles";
import { Switch } from "./switch/switch";
import { FormularioPlantilla } from "./formulario-plantilla/formulario-plantilla";
import { FormularioReactivo } from "./formulario-reactivo/formulario-reactivo";
import { Children } from "./children/children";
import { FormsModule } from '@angular/forms';
import { AddMessages } from "./add-messages/add-messages";
import { ListMessages } from "./list-messages/list-messages";

@Component({
  selector: 'app-root',
  imports: [Contador, Botones, Formulario, Bucles, Switch, FormularioPlantilla, FormularioReactivo, Children, FormsModule, AddMessages, ListMessages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso_angular');
  tituloPadre = 'cursos Angular';
}
