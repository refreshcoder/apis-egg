import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/weather', controller.weather.index);
  router.get('/location', controller.location.index);
};
