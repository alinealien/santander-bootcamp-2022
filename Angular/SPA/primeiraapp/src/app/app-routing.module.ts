/*
O aquivo app-routing.module.ts é responsável
por mapear as rotas, falando para nossa aplicação
qual arquivo ele deve abrir.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
/*
No app-routing.module.ts, é definida sua rota, 
para que ele abra como default a página
HTML do componente Home.
*/

  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Aluno
  {
    path: 'alunos',
    component: AlunosComponent
  },
  //Professor
  {
    path: 'professores',
    component: ProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
