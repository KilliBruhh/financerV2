export class invoices 
{
    id: null;
    userId: number;
    bechrijving: string;
    amount: number;
    paid: boolean;
    
    constructor(id:null, userId:number, bechrijving: string, amount:number, paid:boolean) 
    {
        this.id = id;
        this.userId = userId;
        this.bechrijving = bechrijving;
        this.amount = amount;
        this.paid = paid;
    }
}