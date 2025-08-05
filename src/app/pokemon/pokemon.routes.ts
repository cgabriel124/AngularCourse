import { Routes } from '@angular/router';
import { Pokemon } from './pokemon';
import { Botones } from '../botones/botones';
import { Contador } from '../contador/contador';

export const pokemonRoutes: Routes = [
    { path: '', component: Pokemon,
      children: [
        { path: 'movimientos', component: Contador },
        { path: 'botones', component: Botones }
      ]
     },
];