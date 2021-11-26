import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { authenticationSuccess } from './actions/auth.actions';
import { environment } from '../environments/environment';

const devToolsOptions: StoreDevtoolsOptions = {
  actionSanitizer: (a) => {
    if (a.type == authenticationSuccess.type && environment.production) {
      return ({ type: a.type, payload: 'Redacted' })
    } else {
      return a;
    }
  },
  maxAge: environment.production ? 100 : undefined
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(devToolsOptions),
    EffectsModule.forRoot([AuthEffects])
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ]
})
export class ReduxRootModule { }
