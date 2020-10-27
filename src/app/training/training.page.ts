import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { IonRouterOutlet, ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { TrainerModalComponent } from '../shared/modals/trainer-modal/trainer-modal.component';
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
    private modalCtrl: ModalController,
    private router: Router,
    private routerOutlet: IonRouterOutlet
    ) { }

  ngOnInit() {
    this.getAllTrainers();
  }

  async getAllTrainers() {
    this.allTrainers$ = this.trainerService.getAllTrainers();
  }

  async presentTrainerModal(trainer) {
    const modal = await this.modalCtrl.create({
      component: TrainerModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        imageUrl: trainer.imageUrl,
        name: trainer.displayName.firstName + ' ' + trainer.displayName.lastName,
        description: trainer.description,
        phone: trainer.contact.phone,
        email: trainer.contact.email,
        website: trainer.contact.websiteUrl,
        degrees: trainer.degrees,
        certifications: trainer.certifications,
        facebookUrl: trainer.contact.facebookUrl,
        instagramUrl: trainer.contact.instagramUrl,
        twitterUrl: trainer.contact.twitterUrl
      }
    });
    return await  modal.present();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
