import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { KeycloakEventType, KeycloakService } from "keycloak-angular";
import { authenticationLogOut, authenticationSuccess } from "../actions/auth.actions";
import { AppState } from "../reducers";

@Injectable()
export class AuthEffects {


  constructor(private keycloakService: KeycloakService, private store: Store<AppState>) {

    keycloakService.keycloakEvents$.subscribe({
      next: e => {
        switch (e.type) {
          case KeycloakEventType.OnAuthSuccess: {
            keycloakService.loadUserProfile().then(p => {
              this.store.dispatch(authenticationSuccess({ payload: p }))
            });
            break;
          }
          case KeycloakEventType.OnAuthError:
          case KeycloakEventType.OnAuthLogout: {
            this.store.dispatch(authenticationLogOut());
            break;
          }
        }

      }
    })
  }
}
