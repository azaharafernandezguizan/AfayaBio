import { IgNobel } from './../models/IgNobel';
import { inject, NewInstance } from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(NewInstance.of(IgNobel))
export class IgNobelService {
    private http: HttpClient = null;
    public data : IgNobel[];

    constructor() {

    }

    async getIgNobels(objectApp,callback) {
        const response: Response = await fetch('http://localhost:5000/api/values/getIgNobels');
        const json = await response.json();
  
        objectApp.dataList = json;
  
        callback(objectApp);
     }


   getRandomIgNobels(igNobels,  amountsNobelsSelected): IgNobel[]{
      let resultArrayQuestions = [];
      let choosedNumbers = [];
      let count = 0;

      do{
        let actualNumber = Math.floor((Math.random() * igNobels.length));

        if(choosedNumbers.indexOf(actualNumber) === -1){
           choosedNumbers.push(actualNumber);
           resultArrayQuestions.push(igNobels[actualNumber]);
           count++;
        }
      }while(count < amountsNobelsSelected)

      return resultArrayQuestions;
   }
  }