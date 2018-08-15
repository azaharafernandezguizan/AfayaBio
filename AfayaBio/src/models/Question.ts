export class Pregunta {
    preguntaId: number;
    texto: string;
    respuestaCorrecta: boolean;
    dificultad: string;
    gruposMicros : string;
        
    constructor(PreguntaId: number, Texto: string, RespuestaCorrecta: boolean, 
        Dificultad: string, GruposMicros: string) {
        this.preguntaId = PreguntaId;
        this.texto = Texto;
        this.respuestaCorrecta = RespuestaCorrecta;
        this.dificultad = Dificultad;
        this.gruposMicros = GruposMicros;
    }
}