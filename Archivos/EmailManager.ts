abstract class EmailManager{
    protected parent: EmailManager;

    public setParent(pParent: EmailManager){
        this.parent = pParent;
    }
    
    public getParent(){
        return this.parent;
    }

    public Add(pEmail: any): void{
        
    };

    public Remove(pEmail: any): void{
    };

    public abstract operation(): string;
} 