import { Component } from '@angular/core';
import { Messages } from '../messages';
@Component({
  selector: 'app-list-messages',
  imports: [],
  templateUrl: './list-messages.html',
  styleUrl: './list-messages.css'
})
export class ListMessages {
  constructor(public messagesService: Messages) {}
  autor: string = "Gabriel";

}
