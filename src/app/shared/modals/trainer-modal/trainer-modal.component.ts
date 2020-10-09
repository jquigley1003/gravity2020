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
  phone: string = this.navParams.get('phone');
  email: string = this.navParams.get('email');
  website: string = this.navParams.get('website');
  degrees: string = this.navParams.get('degrees');
  certifications: string = this.navParams.get('certifications');
  facebookUrl: string = this.navParams.get('facebookUrl');
  instagramUrl: string = this.navParams.get('instagramUrl');
  twitterUrl: string = this.navParams.get('twitterUrl');

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
