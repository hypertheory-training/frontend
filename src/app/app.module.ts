import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './components/topics/topics.component';
import { AuthComponent } from './components/layout/auth/auth.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NotificationDropdownComponent } from './components/layout/notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from './components/layout/user-dropdown/user-dropdown.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GravatarModule } from 'ngx-gravatar';


@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    AuthComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    TopicsComponent,
    DashboardComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FontAwesomeModule,
    GravatarModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://auth.hypertheory.cloud/auth',
        realm: 'hypertheory',
        clientId: 'front-end',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
