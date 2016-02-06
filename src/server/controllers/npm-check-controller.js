import npmCheck from 'npm-check';

class NpmCheckController {

  index(req, res) {
    npmCheck().then((result) => {
      res.json({
        status: 200,
        message: 'success',
        data: result
      });
    });
  }
}

export default (app) => {
  return app.NpmCheckController = new NpmCheckController();
}
