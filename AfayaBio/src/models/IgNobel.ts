
export class IgNobel {
    IgNobleID: number;
    Categoria: string;
    Descripcion: string;
    Anio: string;
        
    constructor(IgNobleID: number, Categoria: string, Descripcion: string, 
                Anio: string) {
        this.IgNobleID = IgNobleID;
        this.Categoria = Categoria;
        this.Descripcion = Descripcion;
        this.Anio = Anio;
    }
}