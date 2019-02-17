import Login from './App/components/Login'
import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Add: {
    screen: Add,
  },
  NotificationDetail:{
    screen: NotificationDetail,
  }
}, {
    initialRouteName: 'NotificationDetail',
});

export default createAppContainer(AppNavigator);

