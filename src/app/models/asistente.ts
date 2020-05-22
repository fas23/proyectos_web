export class Asistente {
    usuarioCorreo: string;
    nombreOrganizacion: string;
    solicitaConstancia: boolean;

    Asistente(usuarioCorreo?:string, nombreOrganizacion?:string, solicitaConstancia?:boolean){
        this.usuarioCorreo = usuarioCorreo;
        this.nombreOrganizacion = nombreOrganizacion;
        this.solicitaConstancia = solicitaConstancia;
    }
}
