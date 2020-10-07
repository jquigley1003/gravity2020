import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trainer-modal',
  templateUrl: './trainer-modal.component.html',
  styleUrls: ['./trainer-modal.component.scss'],
})
export class TrainerModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
