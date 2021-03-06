import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/app'));
app.model(require('./models/tab'));
app.model(require('./models/dashboard'));
app.model(require('./models/manager'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
