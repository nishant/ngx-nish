import { NgModule } from '@angular/core';
import { NgxNishComponent } from './ngx-nish.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from "@angular/common";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageSectionDividerComponent } from './components/page-section-divider/page-section-divider.component';
import { PageSectionComponent } from './components/page-section/page-section.component';
import { RouterModule } from "@angular/router";
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    NgxNishComponent,
    VideoPlayerComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageSectionDividerComponent,
    PageSectionComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    RadioButtonComponent,
    RibbonComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  exports: [
    NgxNishComponent,
    VideoPlayerComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageSectionDividerComponent,
    PageSectionComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    RadioButtonComponent,
    RibbonComponent,
    BannerComponent
  ]
})
export class NgxNishModule { }
