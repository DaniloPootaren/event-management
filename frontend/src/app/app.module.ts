import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleButtonsComponent } from './components/toggle-buttons/toggle-buttons.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WidgetService } from './services/widget.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToggleButtonsComponent,
    SidenavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
