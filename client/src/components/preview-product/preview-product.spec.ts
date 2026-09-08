import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewProduct } from './preview-product';

describe('PreviewProduct', () => {
  let component: PreviewProduct;
  let fixture: ComponentFixture<PreviewProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
