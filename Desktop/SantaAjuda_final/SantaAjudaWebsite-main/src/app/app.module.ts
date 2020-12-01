import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTwoComponent } from './views/section-two/section-two.component';
import { SectionThreeComponent } from './views/section-three/section-three.component';
import { SectionFourComponent } from './views/section-four/section-four.component';
import { SectionFooterComponent } from './views/section-footer/section-footer.component';
import { SectionMainComponent } from './views/section-main/section-main.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { ServiceListComponent } from './views/service-list/service-list.component';
import { WebsiteComponent } from './views/website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFooterComponent,
    SectionMainComponent,
    RegisterFormComponent,
    ServiceListComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
