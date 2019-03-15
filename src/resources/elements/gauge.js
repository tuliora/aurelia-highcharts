import {bindable} from 'aurelia-framework';
import highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

export class GaugeCustomElement {

  options;
  @bindable type = 'gauge';
  @bindable title;
  @bindable subtitle;
  @bindable series;
  @bindable min;
  @bindable max;
  @bindable intervals;

  constructor(){}

  attached(){
    this.loadOptions();
    more(highcharts);
    exporting(highcharts);
    exportData(highcharts);
    highcharts.chart(this.options);
  }

  loadOptions(){
    this.options = {
      chart: {
        type: this.type,
        renderTo: this.container,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [[0, '#FFF'],[1, '#333']]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [[0, '#333'],[1, '#FFF']]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
            // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },
      yAxis: {
        min: this.min,
        max: this.max,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'km/h'
        },
        plotBands: this.intervals
      },
      series: this.series
    }
  }
}
