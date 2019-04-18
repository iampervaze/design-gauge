import { Component, NgZone, ElementRef, OnInit } from '@angular/core';
import { BaseGauge } from './base-gauge';
import * as CanvasGauges from 'canvas-gauges';

export { RadialGaugeOptions } from 'canvas-gauges';

/**
 * Implements Radial Gauge from the original library
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'radial-gauge',
  template: '<canvas #gauge></canvas>'
})
// tslint:disable-next-line:component-class-suffix
export class RadialGauge
  extends BaseGauge<CanvasGauges.RadialGauge, CanvasGauges.RadialGaugeOptions>
  implements OnInit {
  constructor(el: ElementRef, zone: NgZone) {
    super(el, zone);
  }

  ngOnInit() {
    this.gauge = new CanvasGauges.RadialGauge(this.options).draw();
  }
}
