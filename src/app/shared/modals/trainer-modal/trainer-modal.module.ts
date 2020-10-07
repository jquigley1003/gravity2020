import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TrainerModalComponent } from './trainer-modal.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    TrainerModalComponent
  ]
})
export class TrainerModalModule { }