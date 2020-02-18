import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
