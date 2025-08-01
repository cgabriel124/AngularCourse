import { Component, NgModule } from '@angular/core';
import { Messages } from '../messages';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  imports: [FormsModule],
  templateUrl: './add-messages.html',
  styleUrl: './add-messages.css'
})
export class AddMessages {
  constructor(public messagesService: Messages) {}

  messageToSend: string = ""

  addMessage() {
    this.messagesService.add(this.messageToSend);
  }
}
