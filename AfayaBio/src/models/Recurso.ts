export class Recurso {
    RecursoID: number;
    Categoria: string;
    Descripcion: string;
    Nombre: string;
        
    constructor(RecursoID: number, Categoria: string, Descripcion: string, 
                Nombre: string) {
        this.RecursoID = RecursoID;
        this.Categoria = Categoria;
        this.Descripcion = Descripcion;
        this.Nombre = Nombre;
    }
}