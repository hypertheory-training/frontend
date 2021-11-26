import { createReducer, on } from "@ngrx/store"
import { KeycloakProfile } from "keycloak-js"
import * as actions from '../actions/auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  profile?: KeycloakProfile
}


const initialState: AuthState = {
  isLoggedIn: false

}

export const reducer = createReducer(
  initialState,
  on(actions.authenticationSuccess, (s, a) => ({ isLoggedIn: true, profile: a.payload })),
  on(actions.authenticationLogOut, () => initialState)
)
