import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesMasterRoutingModule } from './articles-master-routing.module';
import { ArticlesMasterComponent } from './articles-master.component';


@NgModule({
  declarations: [
    ArticlesMasterComponent
  ],
  imports: [
    CommonModule,
    ArticlesMasterRoutingModule
  ]
})
export class ArticlesMasterModule { }
