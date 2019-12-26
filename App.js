import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';

//createStackNavigator(RouteConfigs, StackNavigatorConfig);

// const AppNavigator: () => React$Node = () => {
//   return (
//     <Home />
//   );
// };

//export default App;

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
