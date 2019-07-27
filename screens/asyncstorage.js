import React , { Component } from 'React';
import {TextInput , Appbar , Button , AppRegistery} from 'react-native-paper';
import {Text , View , StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component{
    state = {
      asyncItem : 'loading'
    }
    async componentDidMount(){
        this.setState({
            asyncItem : await AsyncStorage.getItem('my_key')
        })
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
        <View>
          <Text>{this.state.asyncItem}</Text>
          <Button onPress= {this.storageDataAsync} value='press to store' mode='contained'>Press Me</Button>
        </View>
      )
    }
  }