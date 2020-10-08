import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-trainer-modal',
  templateUrl: './trainer-modal.component.html',
  styleUrls: ['./trainer-modal.component.scss'],
})
export class TrainerModalComponent implements OnInit {
  imageUrl: string = this.navParams.get('imageUrl');
  name: string = this.navParams.get('name');
  description: string = this.navParams.get('description');

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
