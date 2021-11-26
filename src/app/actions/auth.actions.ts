import { createAction, props } from "@ngrx/store";
import { KeycloakProfile } from "keycloak-js";

export const authenticationSuccess = createAction(
  '[auth] successful authentication',
  props<{ payload: KeycloakProfile }>()
);

export const authenticationLogOut = createAction(
  '[auth] log out'
);
