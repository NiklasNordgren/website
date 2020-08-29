import { Component, HostBinding, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSmallScreen: Boolean;
  darkThemeActive: Boolean = true;
  mobileQuery: MediaQueryList;

  @HostBinding('class') componentCssClass = "dark-theme";

  constructor(
    public overlayContainer: OverlayContainer,
    public breakpointObserver: BreakpointObserver,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.toggleTheme();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleTheme(): void {
    let theme: string = this.darkThemeActive ? "dark-theme" : "light-theme";
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.darkThemeActive = !this.darkThemeActive;
  }

  private _mobileQueryListener: () => void;

}
