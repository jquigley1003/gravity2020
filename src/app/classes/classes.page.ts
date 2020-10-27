import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
