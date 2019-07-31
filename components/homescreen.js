import React from 'react'
import {Text,View,StyleSheet,ScrollView,Image} from 'react-native'
import {TextInput,List,Card, Title} from 'react-native-paper'
import Header from './header'
import AsyncStorage from '@react-native-community/async-storage';


export default class HomeScreen extends React.Component{
  state = {
    info : {
        name : '',
        temp : '',
        humi : '',
        desc : '',
        icon : ''
    },
    city : ''
  }
  async fetchCity(){
    cityhere = await AsyncStorage.getItem('city')
    if(!cityhere){
        cityhere = 'islamabad'
    }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityhere}&units=metric&APPID=ce9d37c186a702de28b89047f5ad4c49`)
    .then(data=>data.json())
    .then(data2=>{
        this.setState({
            info : {
                name : data2.name,
                temp : data2.main.temp,
                humi : data2.main.humidity,
                desc : data2.weather[0].description,
                icon : data2.weather[0].icon
            }
        })
    })
    .catch(err=>console.log(err))
  }

  componentDidMount(){
      this.fetchCity()
  }
  render(){
    if(this.props.navigation.getParam('city')){
        this.fetchCity()
    }
    return(
      <View>
        <Header title='current weather' />
        <Card style={{margin:20}}>
            <View style={{padding:20}}>
                <Title style={{textAlign:'center'}}>{this.state.info.name}</Title>
                <View style={{alignItems:'center'}}>
                    <Image
                    style={{height:120,width:120}}
                    source={{uri:'http://openweathermap.org/img/w/'+this.state.info.icon+".png"}}
                    />
                </View>
                <Title style={{textAlign:'center'}}>Description : {this.state.info.desc}</Title>
                <Title style={{textAlign:'center'}}>Temperature : {this.state.info.temp}</Title>
                <Title style={{textAlign:'center'}}>Humidity : {this.state.info.humi}</Title>
            </View>

        </Card>
      </View>
    )
  }
}
const style = StyleSheet.create(
  {
    container : {
      fontSize: 30,
      alignItems: "center"
    },
    universalFontSize : {
      fontSize: 30
    }
  }
)