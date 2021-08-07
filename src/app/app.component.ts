import { Component, HostBinding, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSmallScreen: Boolean;
  darkThemeActive: Boolean = true;
  mobileQuery: MediaQueryList;
  href: string = "";
  subscriptions: Subscription = new Subscription();

  @ViewChild('toolbarHeader') toolbarHeaderView: ElementRef;
  @ViewChild('toolbarFooter') toolbarFooterView: ElementRef;

  toolbarHeaderHeight: number;
  toolbarFooterHeight: number;

  @HostBinding('class') componentCssClass = "dark-theme";

  constructor(
    public overlayContainer: OverlayContainer,
    public breakpointObserver: BreakpointObserver,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public router: Router,
    public location: Location
  ) {
    this.toggleTheme();
    this.mobileQuery = media.matchMedia('(max-width: 920px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener(): void {

  };

  ngOnInit(): void {
    const routerSub = this.router.events.subscribe((val) => {
      if (this.location.path() != '' || this.location.path() != this.href) {
        this.href = this.location.path();
        this.changeDetectorRef.detectChanges();
      } else {
        this.href = '/home';
        this.changeDetectorRef.detectChanges();
      }
    });
    this.subscriptions.add(routerSub);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit() {
    this.toolbarHeaderHeight = this.toolbarHeaderView.nativeElement.offsetHeight;
    this.toolbarFooterHeight = this.toolbarFooterView.nativeElement.offsetHeight;
  }

  toggleTheme(): void {
    let theme: string = this.darkThemeActive ? "dark-theme" : "light-theme";
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.darkThemeActive = !this.darkThemeActive;
  }

}
