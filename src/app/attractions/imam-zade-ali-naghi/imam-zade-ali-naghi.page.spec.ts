import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImamZadeAliNaghiPage } from './imam-zade-ali-naghi.page';

describe('ImamZadeAliNaghiPage', () => {
  let component: ImamZadeAliNaghiPage;
  let fixture: ComponentFixture<ImamZadeAliNaghiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImamZadeAliNaghiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImamZadeAliNaghiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
