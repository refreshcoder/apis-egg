import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.index.index);
  // weather
  router.get('/weather/now', controller.weather.now);
  router.get('/weather/future', controller.weather.future);
  router.get('/weather/suggestion', controller.weather.suggestion);

  router.get('/location/geocoder', controller.location.geocoder);
};
