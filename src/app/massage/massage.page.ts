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

  goHome() {
    this.router.navigate(['/home']);
  }

}
