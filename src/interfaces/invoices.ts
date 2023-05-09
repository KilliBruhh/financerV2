export class invoices 
{
    id: null;
    userId: number;
    beschrijving: string;
    amount: number;
    paid: boolean;
    
    constructor(id:null, userId:number, beschrijving: string, amount:number, paid:boolean) 
    {
        this.id = id;
        this.userId = userId;
        this.beschrijving = beschrijving;
        this.amount = amount;
        this.paid = paid;
    }
}