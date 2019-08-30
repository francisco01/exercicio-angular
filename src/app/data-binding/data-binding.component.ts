import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loaine.com';
  valorAtual: string = '';
  cursoAngular = true;
  utlImagem = 'http://lorempixel.com/400/200/nature/';
  valorSalvo: any = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Curso Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(event: KeyboardEvent){
 
    this.valorAtual = (<HTMLInputElement>event.target).value;
  
    
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(1);
  }
 
  onMudouValor(evento){
    console.log(evento.novoValor)
  }
  constructor() { }

  ngOnInit() {
  }

}
