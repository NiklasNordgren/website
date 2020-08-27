import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkthemeactive: Boolean = false;
  @HostBinding('class') componentCssClass = "dark-theme";

  constructor(public overlayContainer: OverlayContainer) { }

  toggleTheme(): void {
    let theme: string = this.darkthemeactive ? "dark-theme" : "light-theme";
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.darkthemeactive = !this.darkthemeactive;
  }

}
