import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { TrainerModalModule } from '../shared/modals/trainer-modal/trainer-modal.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TrainerModalModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
