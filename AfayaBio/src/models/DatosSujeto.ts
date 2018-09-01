
import { DatosAnalisis } from './DatosAnalisis';

export class DatosSujeto {
    IsMale: boolean;
    DatosObtenidos: DatosAnalisis[];
        
    constructor(IsMale: boolean, DatosObtenidos: DatosAnalisis[]) {
        this.IsMale = IsMale;
        this.DatosObtenidos = DatosObtenidos;
    }
}

