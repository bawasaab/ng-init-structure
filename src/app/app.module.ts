import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutFrontendComponent } from './layout/frontend/layout-frontend/layout-frontend.component';
import { LayoutBackendComponent } from './layout/backend/layout-backend/layout-backend.component';
import { FrontendHeaderComponent } from './shared/frontend/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './shared/frontend/frontend-footer/frontend-footer.component';
import { BackendHeaderComponent } from './shared/backend/backend-header/backend-header.component';
import { BackendFooterComponent } from './shared/backend/backend-footer/backend-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutFrontendComponent,
    LayoutBackendComponent,
    FrontendHeaderComponent,
    FrontendFooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
