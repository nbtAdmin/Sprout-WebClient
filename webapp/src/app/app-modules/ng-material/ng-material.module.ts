import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [ MatButtonModule, MatCheckboxModule, MatStepperModule, 
             MatFormFieldModule, MatInputModule, MatDatepickerModule, 
             MatNativeDateModule, MatCardModule, MatToolbarModule, 
             MatSidenavModule, MatIconModule, MatListModule, LayoutModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatStepperModule, 
             MatFormFieldModule, MatInputModule, MatDatepickerModule, 
             MatNativeDateModule, MatCardModule, MatToolbarModule, 
             MatSidenavModule, MatIconModule, MatListModule, LayoutModule ]
})
export class NgMaterialModule { }
