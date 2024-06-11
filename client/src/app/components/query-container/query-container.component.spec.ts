import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryContainerComponent } from './query-container.component';

describe('QueryContainerComponent', () => {
  let component: QueryContainerComponent;
  let fixture: ComponentFixture<QueryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
