import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {


  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  isDark() {
    const darkModeValue = localStorage.getItem('dark-mode');

    if (darkModeValue) {
      const darkModeObject = JSON.parse(darkModeValue);
      if (darkModeObject.darkMode) {
        return true;
      }
      else {
        return false;
      }
    }
    return false;
  }

}
