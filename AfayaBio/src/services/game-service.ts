import { Pregunta } from './../models/Question';
import { inject, NewInstance } from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(NewInstance.of(Pregunta))
export class GameService {
    private http: HttpClient = null;
    public data : Pregunta[];

    constructor() {

    }

    async getPreguntas(objectApp, callback){
        const response: Response = await fetch('http://localhost:5000/api/values/getJuego');
        const json = await response.json();
  
        objectApp.dataList = json;
  
        callback(objectApp);
     }

     getRandomQuestions(questions, amountQuestionsSelected): Pregunta[]{
        let resultArrayQuestions = [];
        let choosedNumbers = [];
        let count = 0;
  
        do{
          let actualNumber = Math.floor((Math.random() * questions.length));
  
          if(choosedNumbers.indexOf(actualNumber) === -1){
             choosedNumbers.push(actualNumber);
             resultArrayQuestions.push(questions[actualNumber]);
             count++;
          }
        }while(count < amountQuestionsSelected)
  
        return resultArrayQuestions;
     }


   
  }