import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { IonRouterOutlet, ModalController } from '@ionic/angular';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TrainerModalComponent } from '../shared/modals/trainer-modal/trainer-modal.component';
import { Trainer } from '../shared/models/trainer';
import { TrainerService } from '../shared/services/trainer.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit, OnDestroy {
  
  allTrainers$: Observable<any>;
  ngUnsubscribe = new Subject<void>();
  //need to add trainer model
  trainers: Trainer[] = [];

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
    // this.allTrainers$
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(async data => {
    //     if (data) {
    //       this.trainers = data.sort((a, b) => (a.displayName.lastName < b.displayName.lastName) ? -1 : 1) as Trainer[];
    //       console.log('all trainers: ',this.trainers);
    //     } else {
    //       this.trainers = [];
    //       console.log('no trainers');
    //     }
    //   });
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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
