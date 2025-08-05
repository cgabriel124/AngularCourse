import { Routes } from '@angular/router';

import { Contador } from "./contador/contador";
import { Botones } from "./botones/botones";
import { Formulario } from "./formulario/formulario";
import { Bucles } from "./bucles/bucles";
import { Switch } from "./switch/switch";
import { FormularioPlantilla } from "./formulario-plantilla/formulario-plantilla";
import { FormularioReactivo } from "./formulario-reactivo/formulario-reactivo";
import { Children } from "./children/children";
import { AddMessages } from "./add-messages/add-messages";
import { ListMessages } from "./list-messages/list-messages";
import { PageNotFound } from "./page-not-found/page-not-found";
import { Home } from "./home/home";
import { Courses } from './courses/courses';
import { CourseDetail } from './course-detail/course-detail';
import { Pokedex } from './pokedex/pokedex';
import { Pokemon } from './pokemon/pokemon';
import { Region } from './region/region';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'pokedex', component: Pokedex,
    children: [
      { path: 'pokemon', 
        loadChildren: () => import('./pokemon/pokemon.routes').then(m => m.pokemonRoutes)
      },
      { path: 'region', component: Region }
    ]
  },

  { path: 'home', component: Home },
  { path: 'contador', component: Contador },
  { path: 'botones', component: Botones },
  { path: 'formulario', component: Formulario },
  { path: 'bucles', component: Bucles },
  { path: 'switch', component: Switch },
  { path: 'formulario-plantilla', component: FormularioPlantilla },
  { path: 'formulario-reactivo', component: FormularioReactivo },
  { path: 'children', component: Children },
  { path: 'add-messages', component: AddMessages },
  { path: 'list-messages', component: ListMessages },
  { path: 'courses', component: Courses },
  { path: 'courses/:courseName', component: CourseDetail },

  //La ruta alternativa siempre al final
  { path: '**', component: PageNotFound },

];
