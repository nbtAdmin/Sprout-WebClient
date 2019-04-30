import { Component, OnInit, Input } from '@angular/core';
import { INewEventInfo } from '../../../../models/INewEventInfo';

@Component({
  selector: 'app-new-event-confirm',
  templateUrl: './new-event-confirm.component.html',
  styleUrls: ['./new-event-confirm.component.scss']
})
export class NewEventConfirmComponent implements OnInit {


  @Input() newEventInfo : INewEventInfo;

  constructor() { }

  ngOnInit() {
    
  }

  sumbitNewEvent(){
    console.log('submit')
  }

}
