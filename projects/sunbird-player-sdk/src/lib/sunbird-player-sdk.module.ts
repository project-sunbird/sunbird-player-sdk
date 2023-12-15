import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { PlayerUtilsModule } from './player-utils/player-utils.module';
export const PLAYER_CONFIG = new InjectionToken<any>('playerConfig');

@NgModule({
  declarations: [],
  imports: [
    CoreModule, PlayerUtilsModule
  ],
  exports: [CoreModule, PlayerUtilsModule]
})
export class SunbirdPlayerSdkModule {
  static forRoot(config?: { contentCompatibilityLevel: number }): ModuleWithProviders<SunbirdPlayerSdkModule> {
    return {
      ngModule: SunbirdPlayerSdkModule,
      providers: [
        { provide: PLAYER_CONFIG, useValue: config }
      ]
    };
  }
}
