import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  imports: [ FormsModule ],
  templateUrl: './children.html',
  styleUrl: './children.css'
})
export class Children {
  @Input() titulo?: string;
  @Output() tituloCambiado = new EventEmitter<string>();
  avisarCambioDeTitulo() {
    this.tituloCambiado.emit(this.titulo);
  }
}
