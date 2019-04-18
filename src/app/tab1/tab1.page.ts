import { Component, ViewChild } from '@angular/core';
import { RadialGauge, RadialGaugeOptions } from '../gauge/radial-gauge';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('chart') chart: RadialGauge;

  options: any = { width: 100, height: 100 };

  watcher: Subscription;
  activeMediaQuery = '';
  categories: any[] = [
    {
      name: 'Basic'
    },
    {
      name: 'Advanced'
    }
  ];

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change) this.changeHeight(change.mqAlias);
    });
  }

  changeHeight(breakpoint: string) {
    if (!breakpoint) return;

    let sizeMap = {
      xs: 200,
      sm: 300,
      md: 350,
      lg: 400,
      xl: 500
    };

    let size = sizeMap[breakpoint];
    if (!size) {
      console.log('Breakpoint Mapping Not Found', breakpoint);
      return;
    }
    console.log('Adjusting Chart Size for', breakpoint, size);
    //this.chart.updateSize(size, size);
    this.chart.update({ width: size, height: size });
  }

  toggleSection(i: number) {
    this.categories[i].open = !this.categories[i].open;
  }

  save() {
    //let options = Object.assign({}, this.options);
    console.log('UPDATING WITH OPTIONS: ', this.options);
    this.chart.update(this.options);
  }
}
