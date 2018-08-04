import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Bienvenida' },
      { route: 'analisis',         name: 'analisis',      moduleId:PLATFORM.moduleName('./analisis'), nav: true, title: 'Entiende tu análisis' },
      { route: 'game',         name: 'game',      moduleId:PLATFORM.moduleName('./game'), nav: true, title: 'Juego MicrobiologiaTest' },
      { route: 'fun',         name: 'fun',      moduleId:PLATFORM.moduleName('./fun'), nav: true, title: 'Ciencia Divertida' }
    ]);
  }
}
