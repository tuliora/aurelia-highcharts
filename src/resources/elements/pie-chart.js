import {bindable} from 'aurelia-framework';
import highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import highcharts3d from 'highcharts/highcharts-3d';

export class PieChartCustomElement {

  options;
  @bindable type = 'line';
  @bindable title;
  @bindable subtitle;
  @bindable series;
  @bindable options3d = null;

  constructor(){}

  attached(){
    this.loadOptions();
    exporting(highcharts);
    exportData(highcharts);
    highcharts3d(highcharts);
    highcharts.chart(this.options);
  }

  loadOptions(){
    this.options = {
      chart: {
        type: this.type,
        renderTo: this.container,
        options3d: this.options3d
      },
      title: {
        text: this.title
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      subtitle: {
        text: this.subtitle
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (highcharts.theme && highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: this.series
    }
  }
}
