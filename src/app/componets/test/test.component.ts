import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string;
  public answers:any[];
  public answerCorrect:boolean;
  public answerChoosed:boolean;

  constructor() { 
    this.question = '¿cual es la capital de españa?';
    this.answers = [
      {
        'answer':'Zaragoza',
        'correct':false
      },
      {
        'answer':'Barcelona',
        'correct':false
      },
      {
        'answer':'Madrid',
        'correct':true
      },
      {
        'answer':'Sevilla',
        'correct':false
      }
    ];
    this.answerCorrect = false;
    this.answerChoosed = false;
  }

  ngOnInit() {
  }

  //metodo que averigua cual es la respuesta correcta atraves de index
  ckeckAnswerIndex(index){
    this.answerCorrect = this.answers[index].correct;
    this.answerChoosed = true;
    

  }

  //metodo que averigua cual es la respuesta correcta atraves de objeto
  ckeckAnswerObj(obj){
    this.answerCorrect= obj.correct;
    this.answerChoosed = true;
    console.log(this.answerCorrect);
    
    
  }


}
