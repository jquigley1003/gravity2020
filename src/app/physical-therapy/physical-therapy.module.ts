import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalTherapyPageRoutingModule } from './physical-therapy-routing.module';

import { PhysicalTherapyPage } from './physical-therapy.page';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicalTherapyPageRoutingModule,
    FooterModule
  ],
  declarations: [PhysicalTherapyPage]
})
export class PhysicalTherapyPageModule {}
