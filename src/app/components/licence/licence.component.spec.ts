import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenceComponent } from './licence.component';

describe('LicenceComponent', () => {
  let component: LicenceComponent;
  let fixture: ComponentFixture<LicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});