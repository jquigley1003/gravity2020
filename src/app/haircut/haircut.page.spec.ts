import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaircutPage } from './haircut.page';

describe('HaircutPage', () => {
  let component: HaircutPage;
  let fixture: ComponentFixture<HaircutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaircutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
