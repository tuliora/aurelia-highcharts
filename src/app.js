export class App {

  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: ['', 'home'], moduleId: 'views/home',   title: 'Home' },
      { route: 'line',       moduleId: 'views/line',   name:'line',   nav:true, title:'Line Graph' },
      { route: 'column',     moduleId: 'views/column', name:'column', nav:true, title:'Column Graph' },
      { route: 'bar',        moduleId: 'views/bar',    name:'bar',    nav:true, title:'Bar Graph' }
    ]);

    this.router = router;
  }
}
