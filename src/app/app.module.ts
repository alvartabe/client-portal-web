import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucideAngularModule, File, Home, Menu, UserCheck, ChevronDown, Box } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck, ChevronDown, Box})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
