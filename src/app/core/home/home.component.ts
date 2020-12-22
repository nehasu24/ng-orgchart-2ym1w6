import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models";
import { UserService, AuthService } from "../services";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  isLoading = false;
  users: User[];
  currentUser: User;
  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.sub = this.authService.currentUser.subscribe(x => {
      if (x) {
        this.isLoading = true;
        this.userService.getAll().subscribe(users => {
          this.isLoading = false;
          this.users = users;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
