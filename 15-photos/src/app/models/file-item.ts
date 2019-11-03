
export class FileItem {
    
    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    public estaSubiedo: boolean;
    public progreso: number;

    constructor(archivo: File){
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;

        this.estaSubiedo = false;
        this.progreso = 0;
    }
}