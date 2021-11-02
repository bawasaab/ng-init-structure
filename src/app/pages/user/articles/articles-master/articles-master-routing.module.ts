import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesMasterComponent } from './articles-master.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesMasterRoutingModule { }
