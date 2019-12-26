import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/home/HomeScreen';
import SplashScreen from './src/pages/splash/SplashScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Splash: SplashScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
