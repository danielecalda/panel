/**
 * Created by manuel on 14/11/2016.
 */
export class Account{
    username: string;
    password: string;
    installId: string;
    token: string;

    constructor(){}

    setAccount(user?: string, pass?: string, id?: string){
        this.username = user;
        this.password = pass;
        this.installId = id;
    }

    setToken(token: string){
        this.token = token;
    }
}