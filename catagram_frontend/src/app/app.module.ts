import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardMiniComponent } from './components/card-mini/card-mini.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import {HttpClientModule} from "@angular/common/http";
import { DiagramPageComponent } from './pages/diagram-page/diagram-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CardMiniComponent,
    AccordionComponent,
    HamburgerComponent,
    HomeCardComponent,
    DiagramPageComponent,
    SearchBarComponent,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
