import React from 'react';
import ReactDOM from 'react-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Provider } from 'react-redux';
import { App } from 'client/views/app';
import { store, history } from 'store/configureStore';
import '@oliasoft-open-source/react-ui-library/dist/global.css';
import 'client/views/styles/global.less';

const Root = () => (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('content'));
