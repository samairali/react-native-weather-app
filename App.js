import React , { Component } from 'React';
import {TextInput , Appbar , Button , AppRegistery} from 'react-native-paper';
import { DrawerActions , createDrawerNavigator, createAppContainer , AppContainer , createStackNavigator, createBottomTabNavigator } from "react-navigation";
import {Text , View , StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mydrawer from './screens/mydrawer';
import Notificationscreen from './screens/notificationscreen';
import AsyncStorage from '@react-native-community/async-storage';



const HomeStack = createStackNavigator({
  Home : Mydrawer
},
{
  defaultNavigationOptions : () => {
    return {
      headerStyle : {backgroundColor : '#f4511e'},
      title       : 'Tab Navigation Is Amazing',
    }
  }
})
const NotificationStack = createStackNavigator({
  Notifications : Notificationscreen
},
{
  defaultNavigationOptions : () => {
    return {
      headerStyle : {backgroundColor : '#f4511e'},
      title       : 'Tab Navigation Is Amazing',
    }
  }
})
const Mytabnavigator = createBottomTabNavigator({
  Home : HomeStack,
  Notifications : NotificationStack,
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      
      tabBarIcon : ({tintColor}) => {
        const {routeName} = navigation.state
        var myicon
        if(routeName == 'Home'){
          myicon = 'md-home'
        } else if(routeName == 'Notifications'){
          myicon = 'md-notifications'
        }
        return <Ionicons name={myicon} color={tintColor} size={30} />
      },
      tabBarOptions : {
        activeTintColor : 'red',
        inactiveTineColor : 'red' 
      }
    }
  }
})

const FullContainer = createAppContainer(Mytabnavigator);
export default class App extends Component{
  state = {
    asyncItem : 'loading'
  }
  storageDataAsync = async () => {
    try {
      await AsyncStorage.setItem('my_key', 'Samair Ali')
      const value = await AsyncStorage.getItem('my_key')
      this.setState({
        asyncItem : value
      })
    } catch (e) {
      // saving error
      console.log(e)
    }
  }
  render(){
    return(
      <FullContainer />
    )
  }
}
// To open and close drawer, use the following helpers to open and cl