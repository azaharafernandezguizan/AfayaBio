import { DatosAnalisis } from './models/DatosAnalisis';
import { DatosSujeto } from './models/DatosSujeto';
import {DatosTotales} from './models/DatosTotales';
import {Parametro} from './models/Parametro';
import {AnalisisService} from './services/analisis-service';

export class Analisis {

  isFormVisible : boolean;
  isResultVisible : boolean;
  parameterList : Parametro[];
  isFemale : boolean;
  analisis : DatosAnalisis[] =[];
  results : DatosTotales[];
  analisisService :AnalisisService;
  isZeroValue: boolean;
  

    constructor() {
      this.isFormVisible = true;
      this.isResultVisible = false;
      this.initializeParameterNames();
      this.isFemale = false;
      this.analisisService = new AnalisisService();
    }

    initializeParameterNames(){
      this.parameterList = [
                            {"Name":"Hematies","Value":0},
                            {"Name":"Hemoglobina","Value":0},
                            {"Name":"Hematocrito","Value":0},
                            {"Name":"VCM","Value":0},
                            {"Name":"HCM","Value":0},
                            {"Name":"Linfocitos","Value":0},
                            {"Name":"Leucocitos","Value":0},
                            {"Name":"Neutrofilos","Value":0},
                            {"Name":"Eosinofilos","Value":0},
                            {"Name":"Plaquetas","Value":0},
                            {"Name":"VSG","Value":0},
                            {"Name":"Glucosa","Value":0},
                            {"Name":"Urea","Value":0},
                            {"Name":"Acido urico","Value":0},
                            {"Name":"Creatinina","Value":0},
                            {"Name":"Colesterol","Value":0},
                            {"Name":"HDL","Value":0},
                            {"Name":"LDL","Value":0},
                            {"Name":"Trigliceridos","Value":0},
                            {"Name":"GOT","Value":0},
                            {"Name":"GPT","Value":0},
                            {"Name":"GGT","Value":0},
                            {"Name":"Fosfatasa alcalina","Value":0},
                            {"Name":"Calcio","Value":0},
                            {"Name":"Hierro","Value":0},
                            {"Name":"Potasio","Value":0},
                            {"Name":"Sodio","Value":0},
                            {"Name":"Bilirrubina","Value":0}
                          ];
    };

    sendAnalisis() {

      this.analisis =[];
      this.isZeroValue = false;
      for(var i =0; i<this.parameterList.length; i++){
          var ParametroId = i+1;
          var ParametroName = this.parameterList[i].Name;
          var ParametroValue = this.parameterList[i].Value;
          this.isZeroValue = this.parameterList[i].Value == 0;
          if(this.isZeroValue){
            return;
          }
          var currentDatoAnalisis = new DatosAnalisis(ParametroId, ParametroName, ParametroValue);
          this.analisis.push(currentDatoAnalisis);
      }
      

      var isMale = !this.isFemale;

      var sujeto = new DatosSujeto(isMale, this.analisis);

      this.analisisService.getTotalData(this, function (objectApp) {
          objectApp.obtainResults(objectApp.dataList, sujeto);
      });
      
     
      
     };

     obtainResults(totalData : DatosTotales[], personData : DatosSujeto){
        this.results = this.analisisService.getAnalisisResult(totalData, personData);
        this.isFormVisible = false;
        this.isResultVisible = true;
     }



  }