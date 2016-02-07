import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import compression from 'compression';
import bootstrap from './bootstrap/bootstrap';

const app = express();

bootstrap(app);

app.set('showStackError', true);
app.set('port', process.env.port || 8081)

app.use(compression());
app.use(cors({ exposeHeaders: ['Link'] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(flash());

routes(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${app.get('port')} in ${app.settings.env} mode`)
})
