import { Recurso } from './../models/Recurso';
import { inject, NewInstance } from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(NewInstance.of(Recurso))
export class RecursosService {
    private http: HttpClient = null;
    public data : Recurso[];

    constructor() {

    }

    async getRecursos(objectApp, callback){
        const response: Response = await fetch('http://localhost:5000/api/values/getRecursos');
        const json = await response.json();
  
        objectApp.dataList = json;
  
        callback(objectApp);
     }


   
  }