import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html'
})
export class UserDropdownComponent implements AfterViewInit, OnInit {
  dropdownPopoverShow = false;
  isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;

  constructor(private readonly keycloak: KeycloakService, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public logOut() {
    this.keycloak.logout();
    this.router.navigate(["/"]);
  }

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );

  }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
