import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBackendComponent } from './layout/backend/layout-backend/layout-backend.component';
import { LayoutFrontendComponent } from './layout/frontend/layout-frontend/layout-frontend.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
	{
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
  {
    path: 'admin',
	component: LayoutBackendComponent,
	children: [
		{
			path: 'dashboard',
			loadChildren: () => import('./pages/admin/admin-dashboard/admin-dashboard.module').then( module => module.AdminDashboardModule )
		},
		{
			path: 'user-list',
			loadChildren: () => import('./pages/admin/users/user-list/user-list.module').then( module => module.UserListModule )
		},
		{
			path: 'user-master',
			loadChildren: () => import('./pages/admin/users/user-master/user-master.module').then( module => module.UserMasterModule )
		}
	]
  },
  {
    path: 'user',
	component: LayoutFrontendComponent,
	children: [
		{
			path: 'dashboard',
			loadChildren: () => import('./pages/user/user-dashboard/user-dashboard.module').then( module => module.UserDashboardModule )
		},
		{
			path: 'article-list',
			loadChildren: () => import('./pages/user/articles/articles-list/articles-list.module').then( module => module.ArticlesListModule )
		},
		{
			path: 'article-master',
			loadChildren: () => import('./pages/user/articles/articles-master/articles-master.module').then( module => module.ArticlesMasterModule )
		}
	]
  },
  {
	  path: '**',
	  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
