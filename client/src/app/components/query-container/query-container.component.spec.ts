import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueryContainerComponent } from './query-container.component';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';
import { AppModule } from '../../app.module';

describe('QueryContainerComponent', () => {
  let component: QueryContainerComponent;
  let fixture: ComponentFixture<QueryContainerComponent>;
  let themeDataService: ThemeDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ThemeDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(QueryContainerComponent);
    component = fixture.componentInstance;
    themeDataService = TestBed.inject(ThemeDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reflect changes in theme mode', () => {
    expect(component.themeMode).toBe('dark');

    themeDataService.toggleThemeMode('light');
    fixture.detectChanges();

    expect(component.themeMode).toBe('light');

    themeDataService.toggleThemeMode('dark');
    fixture.detectChanges();

    expect(component.themeMode).toBe('dark');
  });
});
