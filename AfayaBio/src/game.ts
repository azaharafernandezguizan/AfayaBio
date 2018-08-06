import { RecursosService } from './services/recursos-service';
import { Recurso } from './models/Recurso';
import { inject } from 'aurelia-framework';

@inject(RecursosService)
export class Game {
  recursosService : RecursosService;
  recursosTotalData: Recurso[];

    constructor() {
      this.recursosService = new RecursosService();
      this.getRecursos();
    }

    getRecursos(){
      this.recursosService.getRecursos(this, function (objectApp) {
        objectApp.recursosTotalData = objectApp.dataList;
      });
    }
  }