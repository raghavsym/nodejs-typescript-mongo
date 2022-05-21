import * as express from 'express'
// import { appendFile } from 'fs';

const routes = require('./routes');

class App {
  public express: any;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    });
    this.express.use('/', router);
    this.express.use(routes);
  }
}

export default new App().express;
