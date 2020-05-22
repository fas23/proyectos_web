export class PuntoInteres {
    id : number;
    nombre : string;
    descripcion : string;
    latitud : number;
    longitud : number;
    urlMapa : string;
    ultimaModificacion : Date;

    PuntoInteres(id?:number, nombre?: string, descripcion?: string, latitud?: number, longitud?: number, urlMapa?: string, 
        ultimaModificacion?: Date){
            this.id = id;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.latitud = latitud;
            this.longitud = longitud;
            this.urlMapa = urlMapa;
            this.ultimaModificacion = ultimaModificacion;
    }
}
