export default (app) => {
  app.get('/', (req, res) => {
    res.json({
      status: 200,
      message: 'api online'
    });
  });

  // core routes register...
  // register module based routes in its own router.
  app.post('/npm-check', app.NpmCheckController.index);

  // if it seems to be something "core/global" put that shit here
  app.get('/*', (req, res) => {
    res.send(404);
  });
}
