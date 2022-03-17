import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDelegate } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ParkingSpaceDescComponent } from './parking-space-desc.component';

describe('ParkingSpaceDescComponent', () => {
  let component: ParkingSpaceDescComponent;
  let fixture: ComponentFixture<ParkingSpaceDescComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ModalController,
        AngularDelegate
      ],
      declarations: [ ParkingSpaceDescComponent ],
      imports: [MatIconModule, MatExpansionModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    modalCtr = TestBed.inject(ModalController);
    angdelegate = TestBed.inject(AngularDelegate);
    fixture = TestBed.createComponent(ParkingSpaceDescComponent);
    component = fixture.componentInstance;
    component.parkingSpace = {parking_features:{}}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
