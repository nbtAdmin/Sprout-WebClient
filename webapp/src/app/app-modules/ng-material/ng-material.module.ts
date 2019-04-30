import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [ MatButtonModule, MatCheckboxModule, MatStepperModule, 
             MatFormFieldModule, MatInputModule, MatDatepickerModule, 
             MatNativeDateModule, MatCardModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatStepperModule, 
             MatFormFieldModule, MatInputModule, MatDatepickerModule, 
             MatNativeDateModule, MatCardModule ]
})
export class NgMaterialModule { }
