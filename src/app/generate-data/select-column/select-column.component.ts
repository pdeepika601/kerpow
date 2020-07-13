import { Component, OnInit,Output,EventEmitter,Input, OnChanges } from '@angular/core';
import {TableDetails} from './../../model/table-detail.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-column',
  templateUrl: './select-column.component.html',
  styleUrls: ['./select-column.component.scss']
})
export class SelectColumnComponent implements OnInit,OnChanges {
  @Output() goForward = new EventEmitter();
  @Input() tableDetails:TableDetails;
  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  columns=[];
selectedColumn: any;
ngOnInit(){
  this.form = this.fb.group({
    record_number: ['', Validators.required],
    column: ['', Validators.required],
    fromDate: ['', Validators.required],
    toDate: ['', Validators.required]
  });
}
  ngOnChanges(){
    this.tableDetails.column_details.forEach(element => {
      this.columns.push(element.name);
    });

  }
  next(){
    this.selectedColumn = {
      table_name:this.tableDetails.table_name,
      record_number: this.form.controls['record_number'].value,
     column_name: this.form.controls['column'].value,
     fromDate: this.form.controls['fromDate'].value,
     toDate: this.form.controls['toDate'].value,
    }
  }
}
