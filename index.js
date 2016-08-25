import makeStore from './src/store';
import startServer from './src/server';

const startEntries = require('./entries.json');

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: startEntries,
});
store.dispatch({ type: 'NEXT' });
