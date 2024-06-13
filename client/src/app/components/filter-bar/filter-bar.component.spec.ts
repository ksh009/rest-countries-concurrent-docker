import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { FilterBarComponent } from './filter-bar.component';
import { QueryDataService } from '../../services/query-data/query-data.service';
import { AppModule } from '../../app.module';

describe('FilterBarComponent', () => {
  let component: FilterBarComponent;
  let fixture: ComponentFixture<FilterBarComponent>;
  let themeDataService: ThemeDataService;
  let queryDataService: QueryDataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ThemeDataService, QueryDataService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterBarComponent);
    component = fixture.componentInstance;
    themeDataService = TestBed.inject(ThemeDataService);
    queryDataService = TestBed.inject(QueryDataService);
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

  it('should call queryDataService.sendFilterQuery when a filter term is selected', () => {
    spyOn(queryDataService, 'sendFilterQuery');

    component.filterTerm = 'Europe';
    component.onFilterTermSelect();

    expect(queryDataService.sendFilterQuery).toHaveBeenCalledWith('europe');
  });
});
