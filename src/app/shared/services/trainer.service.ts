import { Injectable, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DbService } from './db.service';


@Injectable({
  providedIn: 'root'
})
export class TrainerService implements OnDestroy {

  _allTrainers: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  ngUnsubscribe = new Subject<void>();
 
  constructor(private dbService: DbService) {
    this.initializeTrainerService();
   }

  initializeTrainerService() {
    this.fetchTrainers();
  }

  fetchTrainers() {
    this.dbService.collection$('trainers', ref => ref.orderBy('displayName.lastName'))
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      res => {
        this._allTrainers.next(res);
      },
    err => console.log('Error retrieving Trainers')
    );
  }

  getAllTrainers() {
    return this._allTrainers.asObservable();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
