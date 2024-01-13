import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoqeBabaTorkPage } from './boqe-baba-tork.page';

describe('BoqeBabaTorkPage', () => {
  let component: BoqeBabaTorkPage;
  let fixture: ComponentFixture<BoqeBabaTorkPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoqeBabaTorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoqeBabaTorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
