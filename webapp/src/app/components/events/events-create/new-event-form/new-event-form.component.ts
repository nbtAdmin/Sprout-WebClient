import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { INewEventInfo } from '../../../../models/INewEventInfo';



@Component({
  selector: 'app-new-event-form',
  templateUrl: './new-event-form.component.html',
  styleUrls: ['./new-event-form.component.scss']
})
export class NewEventFormComponent implements OnInit {

  isLinear = true;
  eventNameFormGroup: FormGroup;
  eventDescriptionFormGroup: FormGroup;
  eventImageUriFormGroup:FormGroup;
  eventStartDateFormGroup:FormGroup;
  eventEndDateFormGroup:FormGroup;

  @Output() newEventInfoEventEmitter = new EventEmitter<INewEventInfo>();
  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eventNameFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required]
    });
    this.eventDescriptionFormGroup = this._formBuilder.group({
      eventDescription: ['', Validators.required]
    });
    this.eventImageUriFormGroup = this._formBuilder.group({
      eventImageUri: ['', Validators.required]
    });
    this.eventStartDateFormGroup = this._formBuilder.group({
      eventStartDate: ['', Validators.required]
    });
    this.eventEndDateFormGroup = this._formBuilder.group({
      eventEndDate: ['']
    })
  }

  previewEventInfo() {
    const newEvent:INewEventInfo = {
      eventName:this.eventNameFormGroup.value.eventName,
      eventDescription:this.eventDescriptionFormGroup.value.eventDescription,
      eventStartDate:this.eventStartDateFormGroup.value.eventStartDate, 
      eventEndDate:this.eventEndDateFormGroup.value.eventEndDate
    }
    //console.log(newEvent);
    this.newEventInfoEventEmitter.emit(newEvent);

  }

  prepareImageUpload(){
    console.log("TODO: Implement Image Upload")
  }

}
