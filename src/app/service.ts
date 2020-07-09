import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service{

    constructor(private http: HttpClient){}

    checkDBConnect(){
        // this.http.
    }
}