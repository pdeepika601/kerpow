import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  @Output() goForward = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  next(){
    this.goForward.emit();
  }
}
