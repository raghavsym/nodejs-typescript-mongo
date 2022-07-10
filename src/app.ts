import * as express from 'express'
import helmet from 'helmet';
import * as morgan from 'morgan';
import * as cors from 'cors';
const routes = require('./routes');

// You can set morgan to log differently depending on your environment
// if (app.get('env') == 'production') {
//   app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
// } else {
//   app.use(morgan('dev'));
// }

class App {
  public express: any;

  constructor () {
    this.express = express();

    // Securities
    // this.express.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
    this.express.use(helmet());
    this.express.use(morgan('dev'));
    this.express.use(cors({origin: '*'}));
    // helmet.contentSecurityPolicy(options) lets you set the Content-Security-Policy which allows you to mitigate cross-site scripting attacks. 
    this.express.use(helmet.contentSecurityPolicy({useDefaults: true, directives: {"script-src": ["'self'", "securecoding.com"],"style-src": null}}));
    // helmet.hidePoweredBy removes the X-Powered-By broswer, which can give valuable information to malicious users to exploit
    this.express.use(helmet.hidePoweredBy());
    // helmet.noSniff sets the X-Content-Type-Options head to nosniff. This prevents MIME type sniffing.
    this.express.use(helmet.noSniff());
    // helmet.xssFilter prevents cross-site scripting. While browsers come with a filter that prevents this by default.
    this.express.use(helmet.xssFilter());
    // helmet.hsts sets the Strict-Transport-Security header. This tells the browser to prefer HTTPS over HTTP. The maxAge parameter lets the number of seconds browsers should remember to prefer HTTPS. By default, this figure is 15552000 — or 180 days.
    this.express.use(helmet.hsts({maxAge: 123456, includeSubDomains: false,}));
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
