export class users {
    id: null;
    username: string;
    email: string;
    password: string;
    constructor(id:null, username:string, email:string,password:string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}