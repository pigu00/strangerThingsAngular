import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {

  constructor(private fb: FormBuilder) { }

  miForm:FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(5)]]
  }
  )
  

}
