import { Component, OnInit, Input } from '@angular/core';
//declara a importação da estrutura criada em alunos.ts
import { alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica';
  // Atribui o componente alunos para a variável lista_alunos
  lista_alunos = alunos;
}


