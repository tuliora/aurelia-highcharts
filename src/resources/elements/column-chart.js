import {bindable} from 'aurelia-framework';
import highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

export class ColumnChartCustomElement{

  @bindable stacking = '';//Possible values are undefined to disable, "normal" to stack by value or "percent"
  @bindable title;
  @bindable subtitle;
  @bindable titleY;
  @bindable pointFormat;
  @bindable series;
  @bindable categories;

  attached(){
    this.loadOptions();
    exporting(highcharts);
    exportData(highcharts);
    highcharts.chart(this.options);
  }

  loadOptions(){
    this.options = {
      chart: {
        type: 'column',
        renderTo: this.container
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      xAxis: {
        categories: this.categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: this.titleY
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: this.pointFormat,
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          stacking: this.stacking,
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: this.series
    }
  }
}
