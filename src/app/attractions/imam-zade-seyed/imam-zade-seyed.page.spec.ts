import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImamZadeSeyedPage } from './imam-zade-seyed.page';

describe('ImamZadeSeyedPage', () => {
  let component: ImamZadeSeyedPage;
  let fixture: ComponentFixture<ImamZadeSeyedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImamZadeSeyedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImamZadeSeyedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
