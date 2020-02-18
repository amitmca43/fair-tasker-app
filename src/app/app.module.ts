import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AuthenticationService } from "./services/authentication.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
