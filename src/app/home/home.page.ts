import { Component, ViewChild, AfterViewInit, ViewChildren, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { IonContent, AnimationController, Animation, IonCard, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TrainerModalComponent } from '../shared/modals/trainer-modal/trainer-modal.component';
import { TrainerService } from '../shared/services/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('training') myTraining: ElementRef;
  @ViewChild('classes') myClasses: ElementRef;
  @ViewChild('massage') myMassage: ElementRef;
  @ViewChild('membership') myMembership: ElementRef;
  @ViewChild('trainers') myTrainers: ElementRef;

  trainingAnim: Animation;
  classesAnim: Animation;
  showFAB:boolean = false;
  allTrainers$: Observable<any>;

  slideOpts = {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  public instagramPhotos = [
    {
      title: 'Biceps',
      url:  '../assets/socialMedia/photos-biceps.jpg',
      icon: 'heart'
    },
    {
      title: 'Members',
      url: '../assets/socialMedia/photos-collage.jpg',
      icon: 'heart'
    },
    {
      title: 'David Sigler',
      url: '../assets/socialMedia/photos-dave1.jpg',
      icon: 'heart'
    },
    {
      title: 'Pushups',
      url: '../assets/socialMedia/photos-pushupwithbb.jpg',
      icon: 'heart'
    },
    {
      title: 'Wonder Women',
      url: '../assets/socialMedia/photos-women.jpg',
      icon: 'heart'
    },
    {
      title: 'Darren Floro-Bryant',
      url: '../assets/socialMedia/photos-dfb1.jpg',
      icon: 'heart'
    },
  ];

  constructor(
    private trainerService: TrainerService,
    private animationCtrl: AnimationController,
    private router: Router,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.getAllTrainers();
  }  

  ngAfterViewInit() {
    this.trainingAnim = this.animationCtrl.create('myTrainingAnim');
    this.trainingAnim
      .addElement(this.myTraining.nativeElement)
      .duration(7000)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);

    this.classesAnim = this.animationCtrl.create('myClassesAnim');
    this.classesAnim
      .addElement(this.myClasses.nativeElement)
      .duration(7000)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
  }

  async getAllTrainers() {
    this.allTrainers$ = this.trainerService.getAllTrainers();
  }

  showFabButton() {
    this.showFAB = true;
  }

  async goToTop() {
    await this.content.scrollToTop(1000);
    this.showFAB = false;
    
  }

  trainingHover() {
    this.trainingAnim.play();
  }

  classesHover() {
    this.classesAnim.play();
  }

  async goToTraining() {
    // this.router.navigate(['/training']);
    const endElem = await this.myTrainers.nativeElement.getBoundingClientRect();
    await this.content.scrollToPoint(endElem.x, endElem.y, 1000);
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
        website: trainer.contact.websiteUrl
      }
    });
    return await  modal.present();
  }

}
