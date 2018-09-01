
export class DatosAnalisis {
    ParametroId: number;
    ParametroName: string;
    ParametroValue : number;
        
    constructor(ParametroId: number, ParametroName: string, ParametroValue: number) {
        this.ParametroId = ParametroId;
        this.ParametroName = ParametroName;
        this.ParametroValue = ParametroValue;
    }
}
