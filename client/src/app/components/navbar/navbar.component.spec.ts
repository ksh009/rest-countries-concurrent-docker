import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { AppModule } from "../../app.module";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize with dark theme mode", () => {
    expect(component.themeMode).toBe("dark");
  });

  it("should toggle theme mode from dark to light", () => {
    component.toggleThemeMode();
    expect(component.themeMode).toBe("light");
  });

  it("should toggle theme mode from light to dark", () => {
    component.toggleThemeMode();
    expect(component.themeMode).toBe("light");
    component.toggleThemeMode();
    expect(component.themeMode).toBe("dark");
  });

  it('should display "Light mode" and sun icon when theme is dark', () => {
    const buttonElement = fixture.nativeElement.querySelector("button");
    const iconElement = buttonElement.querySelector("i");
    
    expect(iconElement.classList.contains("fa-sun")).toBe(true);
    expect(buttonElement.textContent.trim()).toBe("Light mode");
  });

  it('should display "Dark mode" and moon icon when theme is dark', () => {
    const buttonElement = fixture.nativeElement.querySelector("button");
    const iconElement = buttonElement.querySelector('i');

    component.toggleThemeMode();
    fixture.detectChanges();
    
    expect(iconElement.classList.contains('fa-moon')).toBe(true);
    expect(buttonElement.textContent.trim()).toBe('Dark mode');
  });
});
