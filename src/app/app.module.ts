import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, DashboardModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

