import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-generate-data',
  templateUrl: './generate-data.component.html',
  styleUrls: ['./generate-data.component.scss']
})
export class GenerateDataComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  next() {
    this.myStepper.next();
  }

  previous(){
    this.myStepper.previous();
  }

}
