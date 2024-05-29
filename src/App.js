
import { store } from './store/store'
import { Provider } from 'react-redux'
import ScreenBuilder from './ScreenBuilder/index';
import ComponentBuilder from './ScreenBuilder/ComponentBuilder';

const App = () => {

  return (
    <Provider store={store}>
      <ScreenBuilder />
      {/* {wpApiSettings.page && wpApiSettings.page === "screens_builder" && <ScreenBuilder />}
      {wpApiSettings.page && wpApiSettings.page === "components" && <ComponentBuilder/>} */}
    </Provider>
  );
};

export default App;

