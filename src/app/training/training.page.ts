import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { TrainerService } from '../shared/services/trainer.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  allTrainers$: Observable<any>;

  constructor(
    private trainerService: TrainerService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.getAllTrainers();
  }

  async getAllTrainers() {
    this.allTrainers$ = this.trainerService.getAllTrainers();
  }

}
