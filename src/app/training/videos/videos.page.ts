import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import Player from '@vimeo/player';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit, AfterViewInit {
  @ViewChild('trxVideo01') trxVideo01: ElementRef;
  @ViewChild('trxVideo02') trxVideo02: ElementRef;
  @ViewChild('trxVideo03') trxVideo03: ElementRef;
  @ViewChild('kettleBellVideo01') kettleBellVideo01: ElementRef;
  @ViewChild('kettleBellVideo02') kettleBellVideo02: ElementRef;
  @ViewChild('kettleBellVideo03') kettleBellVideo03: ElementRef;
  @ViewChild('kettleBellVideo04') kettleBellVideo04: ElementRef;
  @ViewChild('dumbbellVideo01') dumbbellVideo01: ElementRef;
  @ViewChild('dumbbellVideo02') dumbbellVideo02: ElementRef;
  @ViewChild('dumbbellVideo03') dumbbellVideo03: ElementRef;
  @ViewChild('dumbbellVideo04') dumbbellVideo04: ElementRef;

  trxPlayer01: Player;
  kettleBellPlayer01: Player;
  kettleBellPlayer02: Player;
  kettleBellPlayer03: Player;
  kettleBellPlayer04: Player;
  dumbbellPlayer01: Player;
  dumbbellPlayer02: Player;
  dumbbellPlayer03: Player;
  dumbbellPlayer04: Player;

  slideOpts = {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, classSlidePaginatione) {
        return '<span class="' + classSlidePaginatione + '">' + (index + 1) + '</span>';
      },
    }
  };

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.trxPlayer01 = new Player(this.trxVideo01.nativeElement, {
      id: 547555207,
      width: 350
    });
    
    this.kettleBellPlayer01 = new Player(this.kettleBellVideo01.nativeElement, {
      id: 547556091,
      width: 350
    });  

    this.kettleBellPlayer02 = new Player(this.kettleBellVideo02.nativeElement, {
      id: 547556222,
      width: 350
    });  

    this.kettleBellPlayer03 = new Player(this.kettleBellVideo03.nativeElement, {
      id: 547556794,
      width: 350
    });
    
    this.kettleBellPlayer04 = new Player(this.kettleBellVideo04.nativeElement, {
      id: 547556529,
      width: 350
    });

    this.dumbbellPlayer01 = new Player(this.dumbbellVideo01.nativeElement, {
      id: 547555531,
      width: 350
    });  

    this.dumbbellPlayer02 = new Player(this.dumbbellVideo02.nativeElement, {
      id: 547555654,
      width: 350
    });

    this.dumbbellPlayer03 = new Player(this.dumbbellVideo03.nativeElement, {
      id: 547555741,
      width: 350
    });  

    this.dumbbellPlayer04 = new Player(this.dumbbellVideo04.nativeElement, {
      id: 547555937,
      width: 350
    });  
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
