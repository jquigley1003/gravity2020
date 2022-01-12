import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'heart'
    },
    {
      title: 'Training',
      url: '/training',
      icon: 'barbell'
    },
    {
      title: 'Training Videos',
      url: '/training/videos',
      icon: 'videocam'
    },
    {
      title: 'Classes',
      url: '/classes',
      icon: 'people'
    },
    {
      title: 'Massage',
      url: '/massage',
      icon: 'man'
    },
    {
      title: 'Taper Hair Studio',
      url: '/haircut',
      icon: 'cut'
    },
    {
      title: 'Membership',
      url: '/membership',
      icon: 'card'
    }
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private swUpdate: SwUpdate,
    private router: Router,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(data => {
        console.log(data.current.appData);
        this.alertService.presentAlert(
          'App Update!',
          'Updated version of Gravity Fitness app available.',
          'Load Improved Version?',
          [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Yes',
              handler: () => {
                window.location.reload();
              }
            }
          ]
        );
          // if (confirm('Updated version of SFCA app available. Load New Version?')) {
          //     window.location.reload();
          // }
      });
    }
  }

  goToPage(page, index) {
    this.selectedIndex = index;
    this.router.navigate([page]);
  }
}
