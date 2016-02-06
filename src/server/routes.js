export default (app) => {
  app.get('/', (rew, res) => {
    res.json({
      status: 200,
      message: 'api online'
    });
  });

  app.post('/npm-check', app.NpmCheckController.index);

  app.get('/*', (req, res) => {
    res.send(404);
  });
}
