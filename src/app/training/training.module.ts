import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPageRoutingModule } from './training-routing.module';

import { TrainingPage } from './training.page';
import { TrainerModalModule } from '../shared/modals/trainer-modal/trainer-modal.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    TrainerModalModule,
    FooterModule
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
