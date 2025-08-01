import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo implements OnInit {
  formUser!: FormGroup;

  constructor(private fb: FormBuilder) {

  }


  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get age() {
    return this.formUser.get('age') as FormControl;
  }

  // formUser = new FormGroup({
  //   'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  //   'age': new FormControl('', [Validators.required])
  // });
  ngOnInit(): void {
    this.formUser = this.fb.group({
    'name': ['', [Validators.required, Validators.minLength(3)]],
    'email': ['', [Validators.required, Validators.email]],
    'age': ['', [Validators.required]]
  });

    
  }

  enviarFormulario() {
    console.log(this.formUser.value);
  }


}
