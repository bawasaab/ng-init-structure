import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserArticleReportRoutingModule } from './user-article-report-routing.module';
import { UserArticleReportComponent } from './user-article-report.component';


@NgModule({
  declarations: [
    UserArticleReportComponent
  ],
  imports: [
    CommonModule,
    UserArticleReportRoutingModule
  ]
})
export class UserArticleReportModule { }
