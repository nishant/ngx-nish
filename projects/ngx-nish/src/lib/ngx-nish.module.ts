import { NgModule } from '@angular/core';
import { NgxNishComponent } from './ngx-nish.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CommonModule} from "@angular/common";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageSectionDividerComponent } from './components/page-section-divider/page-section-divider.component';
import { PageSectionComponent } from './components/page-section/page-section.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NgxNishComponent,
    VideoPlayerComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageSectionDividerComponent,
    PageSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NgxNishComponent,
    VideoPlayerComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageSectionDividerComponent,
    PageSectionComponent
  ]
})
export class NgxNishModule { }
