import {MainNavigator} from '@navigators/MainNavigator';
import store from '@redux/store';
import React, {FC} from 'react';
import {Provider} from 'react-redux';

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
