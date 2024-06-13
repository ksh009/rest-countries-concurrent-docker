import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from '../../services/query-data/query-data.service';
import { SearchBarComponent } from './search-bar.component';
import { AppModule } from '../../app.module';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let themeDataService: ThemeDataService;
  let queryDataService: QueryDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [ThemeDataService, QueryDataService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBarComponent);
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
    spyOn(queryDataService, 'sendSearchQuery');

    component.searchValue = 'Europe';
    component.onSearch();

    expect(queryDataService.sendSearchQuery).toHaveBeenCalledWith('europe');
  });
});
