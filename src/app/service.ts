import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs";
import { TableDetails } from './model/table-detail.model';
@Injectable()
export class Service{

    constructor(private http: HttpClient){}

    checkDBConnect(){
        // this.http.
    }
    
  getTableDetails() {
      let table= {
        "columns": [
            {
                "name": "create_time",
                "type": "timestamp"
            },
            {
                "name": "update_time",
                "type": "timestamp"
            },
            {
                "name": "id",
                "type": "int"
            }
        ],
        "noOfRecords": 10,
        "table": "dummy"
    };
      let table_details = [
        {
          table_name: table.table,
          column_number: table.columns.length,
          record_number: table.noOfRecords,
          created_date:table.columns[0].type,
          update_date: table.columns[1].type,
          column_details: table.columns
        }
      ]
      return of(table_details);    
      
    
  }
}