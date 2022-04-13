import { Email } from "./Email";

export class Carpeta extends EmailManager{
    public folder: Email[] = [];

    public Add(pEmail: Email) {
        this.folder.push(pEmail);
    }

    public Remove(pEmail: Email) {
        for(let i = 0; i<this.folder.length; i++){
            if(this.folder[i].getCorreo == pEmail.getCorreo){
                this.folder.splice(i, i);
            }

        }
        
    }

    public operation(): string {
        return "Composite";
    }

}