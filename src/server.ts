import App from '@/app';
import PoolRoute from '@/routes/v1/pool.route';
import IndexRoute from '@routes/v1/index.route';
import validateEnv from '@utils/validateEnv';
import bluebird from 'bluebird';

Promise = bluebird;

validateEnv();

const app = new App([new IndexRoute(), new PoolRoute()]);

app.listen();
