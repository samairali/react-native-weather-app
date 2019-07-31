import React from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import {TextInput,List,Card} from 'react-native-paper'
import SearchScreen from './components/searchscreen'
import HomeScreen from './components/homescreen'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


// export default class App extends React.Component{
//   render(){
//     return(
//       <View>
        
//         <SearchScreen />

//       </View>
//     )
//   }
// }
const TabNavigator = createBottomTabNavigator({
  'current city': HomeScreen,
  'select city': SearchScreen,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'current city') {
        iconName = 'ios-cloud';
      } else if (routeName === 'select city') {
        iconName = 'ios-options';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor: 'red'
  },
});

export default createAppContainer(TabNavigator);
