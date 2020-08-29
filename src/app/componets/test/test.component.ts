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

  ckeckAnswerQuestion(){
    //si la pregunta esta vacia
    if (!this.question) {
      return false;
    }

    // si no existe la pregunta o la pregunta no es un arreglo
    if (!this.answers || !Array.isArray(this.answers)) {
      return false;
    }else{

      // las preguntas deben estar en el rango  2 y 4
       if (!(this.answers.length >=2 && this.answers.length <=4)) {
         return false;
         
       } 

      //filtra las respuesta en una variable
      const correctAnswers = this.answers.filter(answer => answer.correct);
      //si esta variable tiene mas un valor esta malo
      if (correctAnswers.length !== 1) {
        return false;
      
      }
    }
    
    return true;
   
  }


}
