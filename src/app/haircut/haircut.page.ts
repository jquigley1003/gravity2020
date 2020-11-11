import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.page.html',
  styleUrls: ['./haircut.page.scss'],
})
export class HaircutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callHairSalon() {
    window.open(`tel:404-435-1048`, '_system');
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
