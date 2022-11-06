import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEndereco } from './interface';
import { ViaCepService } from './services/via-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // tudo ocorre 
  title = 'busca-cep';

// injeção de depedencias é feita dentro do construtor   
  constructor(
    private formBuilder : FormBuilder,  //contruindo formulario
    private viaCepService : ViaCepService,
    private snackBar: MatSnackBar
  )
  {}

  formulario: FormGroup = this.formBuilder.group({
    inputCep: ["", Validators.required]
  })

  endereco:IEndereco | undefined;

  procurar(){
    const valorInputCep = this.formulario.get('inputCep')?.value
    this.viaCepService.buscarCep(valorInputCep).subscribe((enderecoRetornado) => {

    if(enderecoRetornado.erro){
      this.snackBar.open(`CEP ${valorInputCep} não encontrado`, "fechar")
    }else {
      this.endereco = enderecoRetornado;
    }
    })
}
apagar() {
  this.endereco = undefined;
}
}
