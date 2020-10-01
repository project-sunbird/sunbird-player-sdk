import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { PlayerUtilsModule } from './player-utils/player-utils.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule, PlayerUtilsModule
  ],
  exports: [CoreModule, PlayerUtilsModule]
})
export class SunbirdPlayerSdkModule { }
