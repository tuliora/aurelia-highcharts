import {inject, NewInstance, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(NewInstance.of(HttpClient))
export class Home{

  map;
  seriesLatLon = [
    {unidade: "Curvelo", lat: -18.7532, lon: -44.4307, z:2, color:"#ff607b"},
    {unidade: "Belo Horizonte", lat: -19.9227318, lon: -43.9450948, z:2, color:"#8d8e90"},
    {unidade: "São Paulo", lat: -23.5506507, lon: -46.6333824, z:2, color:"#8d8e90"},
    {unidade: "Santa Catarina", lat: -27.0628367, lon: -51.114965, z:2, color:"#8d8e90"},
    {unidade: "Natal", lat: -5.805398, lon: -35.2080905, z:2, color:"#8d8e90"},
    {unidade: "Acre", lat: -9.0478679, lon: -70.5264976, z:2, color:"#8d8e90"}
  ];

  seriesGauge = [{
    name: 'Speed',
    data: [80],
    tooltip: {valueSuffix: ' km/h'}
  }];

  intervals = [
    {from: 0, to: 55, color: '#55BF3B'},
    {from: 55, to: 80, color: '#DDDF0D'},
    {from: 80, to: 100, color: '#DF5353'}
  ];

  constructor(http){
    this.http = http;
  }

  async attached(){
    this.map = await this.getJson();
  }

  async getJson(){
    let url = 'src/mapdata/br-all.geo.json';
    return new Promise((resolve, reject) => {
      this.http.fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve(data);
      });
    });
  }
}
