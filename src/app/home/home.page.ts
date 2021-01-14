import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { IonContent, AnimationController, Animation, ModalController, IonRouterOutlet, IonSlides, IonList } from '@ionic/angular';
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
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonList) ionList:IonList;
  @ViewChild('training') myTraining: ElementRef;
  @ViewChild('classes') myClasses: ElementRef;
  @ViewChild('massage') myMassage: ElementRef;
  @ViewChild('membership') myMembership: ElementRef;
  @ViewChild('trainers') myTrainers: ElementRef;
  @ViewChild('mySlideImg1') mySlideImg1: ElementRef;
  @ViewChild('mySlideImg2') mySlideImg2: ElementRef;
  @ViewChild('mySlideImg3') mySlideImg3: ElementRef;
  @ViewChild('mySlideImg4') mySlideImg4: ElementRef;

  chromeBrowser: boolean;
  safariBrowser: boolean;
  trainingAnim: Animation;
  classesAnim: Animation;
  massageAnim: Animation;
  membershipAnim: Animation;
  imageAnim1: Animation;
  imageAnim2: Animation;
  imageAnim3: Animation;
  imageAnim4: Animation;
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
    this.checkForSafariBrowser();
  }

  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }

  ionViewDidEnter() {
    this.slides.startAutoplay();
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

    this.massageAnim = this.animationCtrl.create('myMassageAnim');
    this.massageAnim
      .addElement(this.myMassage.nativeElement)
      .duration(7000)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);  

    this.membershipAnim = this.animationCtrl.create('myMembershipAnim');
    this.membershipAnim
      .addElement(this.myMembership.nativeElement)
      .duration(7000)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);  

    this.imageAnim1 = this.animationCtrl.create('myImageAnim1');
    this.imageAnim1
      .addElement(this.mySlideImg1.nativeElement)
      .duration(3000)
      .from('transform', 'scale(1)')
      .to('transform', 'scale(2)');

    this.imageAnim2 = this.animationCtrl.create('myImageAnim2');
    this.imageAnim2
      .addElement(this.mySlideImg2.nativeElement)
      .duration(3000)
      .from('transform', 'scale(1)')
      .to('transform', 'scale(2)');

    this.imageAnim3 = this.animationCtrl.create('myImageAnim3');
    this.imageAnim3
      .addElement(this.mySlideImg3.nativeElement)
      .duration(3000)
      .from('transform', 'scale(1)')
      .to('transform', 'scale(2)');

    this.imageAnim4 = this.animationCtrl.create('myImageAnim4');
    this.imageAnim4
      .addElement(this.mySlideImg4.nativeElement)
      .duration(4000)
      .from('transform', 'scale(1)')
      .to('transform', 'scale(2)');
  }

  async startImgAnim() {
    await this.slides.getActiveIndex()
     .then(index => {
      switch(index) {
        case 1: {
          this.imageAnim1.play();
        }
        case 2: {
          this.imageAnim2.play();
        }
        case 3: {
          this.imageAnim3.play();
        }
        case 4: {
          this.imageAnim4.play();
        }
        case 5: {
          this.imageAnim1.play();
        }
      }
       console.log('slide index is: ' + index);
     })
  }

  async checkForSafariBrowser() {
    this.chromeBrowser = navigator.userAgent.indexOf("Chrome") > -1;
    this.safariBrowser = navigator.userAgent.indexOf("Safari") > -1;
    if((this.chromeBrowser) && (this.safariBrowser)) {
      this.safariBrowser = false;
    }
    console.log("is this a safari browser? ",this.safariBrowser);
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

  async trainingHover() {
    await this.stopAllMenuAnimations();
    this.trainingAnim.play();
  }

  async classesHover() {
    await this.stopAllMenuAnimations();
    this.classesAnim.play();
  }

  async massageHover() {
    await this.stopAllMenuAnimations();
    this.massageAnim.play();
  }

  async membershipHover() {
    await this.stopAllMenuAnimations();
    this.membershipAnim.play();
  }

  async stopAllMenuAnimations() {
    this.trainingAnim.stop();
    this.classesAnim.stop();
    this.massageAnim.stop();
    this.membershipAnim.stop();
  }

  goToTraining() {
    this.router.navigate(['/training']);
    // const endElem = await this.myTrainers.nativeElement.getBoundingClientRect();
    // await this.content.scrollToPoint(endElem.x, endElem.y, 1000);
  }

  goToMassage() {
    this.router.navigate(['/massage']);
  }

  goToClasses() {
    this.router.navigate(['/classes']);
  }

  goToMembership() {
    this.router.navigate(['/membership']);
  }

  goToHaircut() {
    this.router.navigate(['/haircut']);
  }

  async presentTrainerModal(trainer) {
    this.ionList.closeSlidingItems();
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

  callTrainer(phoneNumber) {
    this.ionList.closeSlidingItems();
    window.open(`tel:${phoneNumber}`, '_system');
  }

}
