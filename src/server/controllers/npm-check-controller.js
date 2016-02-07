import npmCheck from 'npm-check';

const NpmCheckController = () => {
  return {
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
}

export default (app) => {
  return app.NpmCheckController = NpmCheckController();
}
