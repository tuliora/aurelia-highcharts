import {bindable} from 'aurelia-framework';
import highmaps from 'highcharts/highmaps';
import proj4 from 'proj4';

export class MapGeoCustomElement {

  options = null;
  @bindable map;
  @bindable series;
  @bindable title = '';
  @bindable subtitle = '';

  constructor() {
    if(window.proj4 == undefined)
      window.proj4 = proj4;
  }

  mapChanged(){
    if(this.map != null){
      this.loadOptions();
      this.chart = highmaps.mapChart(this.options);
    }
  }

  loadOptions() {
    this.options = {
      chart: {
        map: this.map,
        renderTo: this.container
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
          align: 'left'
        }
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.unidade}</b><br>Lat: {point.lat}, Lon: {point.lon}'
      },
      series: [
        {
          name: 'Basemap',
          borderColor: '#f5f5f5',
          nullColor: '#e4e6e8',
          showInLegend: false
        },
        {
          type: 'mappoint',
          name: 'Cities',
          color: '#8d8e90',
          minSize: 4,
          maxSize: '7%',
          data: this.series,
          showInLegend: false
        }
      ]
    }
  }
}
