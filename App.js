import React from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import {AppBar, Appbar,TextInput,Card,List} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends React.Component {
  id = 0
  arr = []
  state = {
    text : '',
    data : [
      {id : 0 , item : 'loading'}
    ]
  }
  StoreDataAsync = async () => {
    this.arr.push({id:this.id,item:this.state.text})
    this.id++
    await AsyncStorage.setItem('mylist', JSON.stringify(this.arr))
    console.log('data has been added ')
    this.setState({
      data : JSON.parse(await AsyncStorage.getItem('mylist'))
    })
  }
  async componentDidMount(){
    this.setState({
      data : JSON.parse(await AsyncStorage.getItem('mylist'))
    })
    console.log(this.state.data.map( (m) => m.id ))
    this.arr = JSON.parse(await AsyncStorage.getItem('mylist')) || ''
    this.id = this.arr[this.arr.length - 1 ].id + 1
  }
  render(){
    if(this.state.data.length >= 1){
      renderList = this.state.data.map(  item => {
        return (
          
            <Card key={item.id} style={{margin: 10,}}>
              <List.Item
                title = {item.item}
                description = 'working'
                right = {props => <List.Icon icon = 'delete' />}
              />
            </Card>
          
        )
      } )
    }else {
      renderList = <Text>'no product found'</Text>
    }
      return(
        <View style={{marginBottom:0}}>
          <Appbar.Header>
            <Appbar.Content
              title='Todo List'
            />
          </Appbar.Header>
            <Text style={{fontSize: 35,textAlign:'center',margin:10}}>Enter Something</Text>
            <TextInput 
              label = 'todo input'
              value = {this.state.item}
              onChangeText = {(fitem) => this.setState({text : fitem })}
            />
            <Button onPress = {this.StoreDataAsync} title='click me ' />
          <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:200,paddingBottom:0,backgroundColor:'#d3d3d3'}}>
            <View>{renderList}</View>
          </ScrollView>
          
        </View>
      )
    }
}