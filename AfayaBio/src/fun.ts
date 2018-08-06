import { IgNobel } from './models/IgNobel';
import { inject } from 'aurelia-framework';
import { IgNobelService } from './services/IgNobel-service';

@inject(IgNobelService)
export class Fun {

  igNobelService : IgNobelService;
  igNobelRandomList : IgNobel[];
  igNobelTotalData: IgNobel[];
  igNobelRandomListLength : number;

    constructor() {
      this.igNobelService = new IgNobelService();
      this.igNobelRandomListLength = 4;
      this.getIgNobels();
    }

    getIgNobels() {
      this.igNobelService.getIgNobels(this, function (objectApp) {
        objectApp.igNobelTotalData = objectApp.dataList;
        objectApp.getRandomIgNobel(objectApp.dataList);
      });
    }
  

    getRandomIgNobel(igNobelList) {
        this.igNobelRandomList =  this.igNobelService.getRandomIgNobels(igNobelList, this.igNobelRandomListLength);
    }

    moreIgNobel(){
      this.getRandomIgNobel(this.igNobelTotalData);
    }

    
  }