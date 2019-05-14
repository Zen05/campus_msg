import React from 'react';
// import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './App/components/Login'
// import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
// import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'
import Notification from './App/components/Notification'
import Commont from './App/components/Commont'
import Questionnaire from './App/components/Questionnaire'
import SettingsScreen from './App/components/SettingsScreen'
// import learning from './App/components/learning'

// import { createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

const HomeStack = createStackNavigator({

  Notification:{
    screen: Notification,
    navigationOptions:()=>{//设置标题
      return {
        headerTitle:'通知',
        headerTitleStyle:{color:'black'}
      }
    }
  },  
  NotificationDetail:{
    screen: NotificationDetail,
    navigationOptions:()=>{//设置标题
      return {
        headerTitle:'详情',
        headerTitleStyle:{color:'black'}
      }
    }
  },
  Questionnaire:{
    screen:Questionnaire,
    navigationOptions:()=>{
      return {
        headerTitle:'问卷调查'
      }
    }
  },
  Commont:{
    screen:Commont,
    navigationOptions:()=>{
      return {
        headerTitle:'评论',
        headerTitleStyle:{
            color:'black'
        }
      }
    }
  }
})

const SettingsStack = createStackNavigator({
  SettingsScreen:{
    screen:SettingsScreen,
    navigationOptions:()=>{//设置标题
      return {
        headerTitle:'设置',
        headerTitleStyle:{color:'black'}
      }
    }
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
})

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Settings: { screen: SettingsStack },  

}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        
        iconName = `ios-options${focused ? '' : ''}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(AppNavigator);

