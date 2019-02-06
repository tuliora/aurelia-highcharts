import {bindable} from 'aurelia-framework';
import highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

export class BarChartCustomElement{

  options;
  @bindable stacking = '';//Possible values are undefined to disable, "normal" to stack by value or "percent"
  @bindable title;
  @bindable titleY;
  @bindable subtitle;
  @bindable series;
  @bindable categories;

  constructor(){}

  attached(){
    this.loadOptions();
    exporting(highcharts);
    exportData(highcharts);
    highcharts.chart(this.options);
  }

  loadOptions(){
    this.options = {
      chart: {
        type: 'bar',
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
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: this.titleY,
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        series: {
          stacking: this.stacking
        },
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((highcharts.theme && highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      series: this.series
    }
  }
}
