import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysicalTherapyPage } from './physical-therapy.page';

describe('PhysicalTherapyPage', () => {
  let component: PhysicalTherapyPage;
  let fixture: ComponentFixture<PhysicalTherapyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTherapyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicalTherapyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
