import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaircutPageRoutingModule } from './haircut-routing.module';

import { HaircutPage } from './haircut.page';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaircutPageRoutingModule,
    FooterModule
  ],
  declarations: [HaircutPage]
})
export class HaircutPageModule {}
