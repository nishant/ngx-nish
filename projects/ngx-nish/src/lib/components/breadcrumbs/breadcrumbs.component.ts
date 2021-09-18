import {Component, Input } from '@angular/core';
import {Breadcrumb} from "./breadcrumb";

@Component({
  selector: 'ngx-nish-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] | undefined
}
