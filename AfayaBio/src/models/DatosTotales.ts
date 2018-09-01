export class DatosTotales{
    
        parametroName :string;
        minValueMale :number;
        maxValueMale :number;
        minValueFemale :number;
        maxValueFemale :number;
        isMin : boolean;
        patologiaName :string;
        patologiaDescription :string;
        tratamiento :string;
        riesgos :string;
        recomendaciones :string;

        public DatosTotales( ParametroName :string, MinValueMale :number, MaxValueMale :number,
                            MinValueFemale: number, MaxValueFemale:number, IsMin: boolean,
                            PatologiaName: string, PatologiaDescription: string, Tratamiento: string,
                            Riesgos:string, Recomendaciones:string){
            this.parametroName = ParametroName;
            this.minValueMale = MinValueMale;
            this.maxValueMale = MaxValueMale;
            this.minValueFemale = MinValueFemale;
            this.maxValueFemale = MaxValueFemale;
            this.isMin = IsMin;
            this.patologiaName = PatologiaName;
            this.patologiaDescription = PatologiaDescription;
            this.tratamiento = Tratamiento;
            this.riesgos =  Riesgos;
            this.recomendaciones = Recomendaciones;
        }
}