import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AreaGolestanKoohPage } from './area-golestan-kooh.page';

describe('AreaGolestanKoohPage', () => {
  let component: AreaGolestanKoohPage;
  let fixture: ComponentFixture<AreaGolestanKoohPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaGolestanKoohPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AreaGolestanKoohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
