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
import { TodayEventComponent } from './components/today-event/today-event.component';
import { BtnComponent } from './components/btn/btn.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { SectionComponent } from './components/section/section.component';
import { UnescapePipe } from './pipes/unescape.pipe';
import { AutosizeModule } from 'ngx-autosize';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { SpinnnerComponent } from './components/spinnner/spinnner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToggleButtonsComponent,
    SidenavComponent,
    HomeComponent,
    TodayEventComponent,
    BtnComponent,
    SearchComponent,
    InputComponent,
    SectionComponent,
    UnescapePipe,
    ViewCategoryComponent,
    SpinnnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    AutosizeModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
