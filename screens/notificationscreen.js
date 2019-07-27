import React , { Component } from 'React';
import {TextInput , Appbar , Button , AppRegistery} from 'react-native-paper';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: () => (
        <Icon name='bell' size={30} color="#000" />
      )
    };
  
    render() {
      return (
        <Button
          onPress={() => console.log(this.props)}
          title="Go back home"
        />
      );
    }
  }