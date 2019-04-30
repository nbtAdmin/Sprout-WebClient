import { Component, OnInit } from '@angular/core';
import { INewEventInfo } from '../../../models/INewEventInfo';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.scss']
})
export class EventsCreateComponent implements OnInit {

  _eventInfoSubmitted = false;

  _eventInfo:INewEventInfo;

  constructor() { }

  ngOnInit() {
  }

  receiveNewEventInfo($newEvent){
    this._eventInfo = $newEvent;
    this._eventInfoSubmitted = true;
  }

  
}
