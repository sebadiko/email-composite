export class Email extends EmailManager {
    private correo: string;
    private receptor: string;
    private mensaje: string;
    private asunto: string;

    constructor(pCorreo: string, pReceptor: string, pAsunto: string, pMensaje: string){
        super();
        this.correo = pCorreo;
        this.receptor = pReceptor;
        this.mensaje = pMensaje;
        this.asunto = pAsunto;
    }

    public getCorreo(){
        return this.correo;
    }

    public getReceptor(){
        return this.receptor;
    }

    public getMensaje(){
        return this.mensaje;
    }

    public getAsunto(){
        return this.asunto;
    }
    

    public operation(): string {
        return 'Leaf';
    }
}