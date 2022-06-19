//import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'
 
@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Aline Antunes', idade: 30, email: 'alinebdantuness@gmail.com', curso: 'Licenciatura em Computacao' },
    { nome: 'Sirius Black', idade: 7, email: 'siriusblack@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Veronica Black', idade: 3, email: 'veronicablack@gmail.com', curso: 'Engenharia da Computacao' },
    { nome: 'Elizabeth Black', idade: 1, email: 'bethblack@gmail.com', curso: 'Sistemas da Informacao' }
  ];


  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++
    
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}