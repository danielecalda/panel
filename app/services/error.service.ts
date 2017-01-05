import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';



import 'rxjs/add/operator/toPromise';

declare var $: any;

@Injectable()
export class ErrorService {
    


    errorStatus: number;
    errorBody: string;
    

    constructor() { }

    

    errorPopUp(errorBody: string, errorStatus: number): void{

        $('#myModalError').modal('show');
        this.errorBody = errorBody;
        this.errorStatus = errorStatus;
        
    }
}