import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BpqeBabaPirPage } from './bpqe-baba-pir.page';

describe('BpqeBabaPirPage', () => {
  let component: BpqeBabaPirPage;
  let fixture: ComponentFixture<BpqeBabaPirPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BpqeBabaPirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BpqeBabaPirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
