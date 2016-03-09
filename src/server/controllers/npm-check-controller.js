import npmCheck from 'npm-check';

const NpmCheckController = () => {
  return {
    index(req, res) {
      npmCheck().then((result) => {
        // this is a bit bold, I should return response based on response
        // but this is for examples sake :)
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
