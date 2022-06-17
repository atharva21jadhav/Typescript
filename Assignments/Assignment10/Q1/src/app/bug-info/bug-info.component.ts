import { Component, OnInit } from '@angular/core';
import {NgbDateStruct,NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html'
})
export class BugInfoComponent {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  model: NgbDateStruct = {year:2022, month:1, day:1 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
}
