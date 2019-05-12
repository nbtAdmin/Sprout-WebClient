import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatExpansionModule, 
  MatRippleModule
 } from '@angular/material';

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
             MatNativeDateModule, MatCardModule, MatToolbarModule, 
             MatIconModule, MatSidenavModule, MatButtonToggleModule,
             MatExpansionModule, 
             MatRippleModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatStepperModule, 
             MatFormFieldModule, MatInputModule, MatDatepickerModule, 
             MatNativeDateModule, MatCardModule, MatToolbarModule, 
             MatIconModule, MatSidenavModule, MatButtonToggleModule,
             MatExpansionModule, 
             MatRippleModule ]
})
export class NgMaterialModule { }
