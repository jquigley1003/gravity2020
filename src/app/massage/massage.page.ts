import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.page.html',
  styleUrls: ['./massage.page.scss'],
})
export class MassagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  callMassage() {
    window.open(`tel:404-486-0506`, '_system');
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
