import { DatosTotales } from './../models/DatosTotales';
import { DatosSujeto } from './../models/DatosSujeto';
import { DatosAnalisis } from './../models/DatosAnalisis';
import { inject, NewInstance } from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(NewInstance.of(DatosTotales))
export class AnalisisService {
    private http: HttpClient = null;
    public data : DatosTotales[];

    constructor() {

    }

    async getTotalData(objectApp, callback){
        const response: Response = await fetch('http://localhost:50900/api/values/getAllData');
        const json = await response.json();
  
        objectApp.dataList = json;
  
        callback(objectApp);
     }

     getAnalisisResult(totalData:DatosTotales[], personData:DatosSujeto): DatosTotales[]{
        var parametersToObserve : DatosTotales[] = [];
        if(personData== null || totalData == null){
            return null;
        }
        var isFemale = !personData.IsMale;
        parametersToObserve = this.compareData(totalData, personData.DatosObtenidos, isFemale);

        return parametersToObserve;
     }

     compareData(totalData :DatosTotales[], personsData :DatosAnalisis[], isFemale: boolean) : DatosTotales[]{
        var resultData :DatosTotales[] =[];

        totalData.forEach(function(currentTotalData){
            personsData.forEach(function(personData){
                if(personData.ParametroName.toLowerCase().trim() === currentTotalData.parametroName.toLowerCase().trim()){
                    var currentParameterValue = Number(personData.ParametroValue);
                    var isPatology = false;
                    
                    if(isFemale)
                    {
                        isPatology = (currentTotalData.isMin && currentParameterValue < currentTotalData.minValueFemale) 
                                     || (!currentTotalData.isMin && currentParameterValue > currentTotalData.maxValueFemale);
                    }
                     else
                    {
                        isPatology = (currentTotalData.isMin && currentParameterValue < currentTotalData.minValueMale) 
                                     || (!currentTotalData.isMin && currentParameterValue > currentTotalData.maxValueMale);
                    }
                    
                    if(isPatology){
                        var currentResult = new DatosTotales();
                        currentResult.parametroName = currentTotalData.parametroName;
                        currentResult.isMin = currentTotalData.isMin;
                        currentResult.patologiaName = currentTotalData.patologiaName;
                        currentResult.patologiaDescription = currentTotalData.patologiaDescription;
                        currentResult.riesgos = currentTotalData.riesgos;
                        currentResult.tratamiento = currentTotalData.tratamiento;
                        currentResult.recomendaciones = currentTotalData.recomendaciones;

                        resultData.push(currentResult);
                    }
                }
            }
        )});

        return resultData;
     }


   
  }