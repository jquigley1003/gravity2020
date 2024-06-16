import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physical-therapy',
  templateUrl: './physical-therapy.page.html',
  styleUrls: ['./physical-therapy.page.scss'],
})
export class PhysicalTherapyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callDrDwinnell() {
    window.open(`tel:919-724-8704`, '_system');
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
