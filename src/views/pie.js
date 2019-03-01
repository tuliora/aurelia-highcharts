export class Pie{

  series = [{
    name: 'Brands',
    colorByPoint: true,
    data: [
      {name: 'Chrome', y: 61.41, sliced: true, selected: true}, {name: 'Internet Explorer', y: 11.84},
      {name: 'Firefox', y: 10.85}, {name: 'Edge', y: 4.67}, {name: 'Safari', y: 4.18}, {name: 'Sogou Explorer', y: 1.64},
      {name: 'Opera', y: 1.6}, {name: 'QQ', y: 1.2}, {name: 'Other', y: 2.61}]
  }];

  series3D = [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0], ['IE', 26.8], {name: 'Chrome', y: 12.8, sliced: true, selected: true},
      ['Safari', 8.5], ['Opera', 6.2], ['Others', 0.7]
    ]
  }];

  options3D = {enabled: true, alpha: 45, beta: 0};
}
