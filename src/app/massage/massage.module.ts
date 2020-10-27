import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassagePageRoutingModule } from './massage-routing.module';

import { MassagePage } from './massage.page';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassagePageRoutingModule,
    FooterModule
  ],
  declarations: [MassagePage]
})
export class MassagePageModule {}
