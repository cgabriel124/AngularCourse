import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Messages {
  //almacena mensajes en un array
  messages: string[] = [];
  //Agrega un mensaje
  add(message: string) {
    this.messages.push(message);
  }
}
