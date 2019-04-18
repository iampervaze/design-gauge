import { NgModule } from '@angular/core';
import { LinearGauge } from './linear-gauge';
import { RadialGauge } from './radial-gauge';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [LinearGauge, RadialGauge],
  imports: [IonicModule],
  exports: [LinearGauge, RadialGauge]
})
export class GaugesModule {}
