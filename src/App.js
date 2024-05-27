
import { store } from './store/store'
import { Provider } from 'react-redux'
import DndApp from './ScreenBuilder/index';

const App = () => {

  return (
    <Provider store={store}>
      <DndApp />
    </Provider>
  );
};

export default App;

