import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // tudo ocorre 
  title = 'busca-cep';

// injeção de depedencias é feita dentro do construtor   
  constructor(
    private formBuilder : FormBuilder  //contruindo formulario
  )
  {}

  formulario: FormGroup = this.formBuilder.group({
    inputCep: ["", Validators.required]
  })

     procurar(){
      const valorInputCep = this.formulario.get('inputCep')?.value
  }
}
