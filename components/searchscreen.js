import React from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import {TextInput,List,Card,Button} from 'react-native-paper'
import Header from './header'
import AsyncStorage from '@react-native-community/async-storage'


export default class SearchScreen extends React.Component{
  state = {
    city : '',
    cities: []
  }
  fetchCity(city){
    this.setState({city:city})
    url = 'https://autocomplete.wunderground.com/aq?query='+city
    fetch(url)
    .then(data=>data.json())
    .then(cit=>{
      this.setState({
        cities:cit.RESULTS.slice(0,19)
      })
    })
    .catch(err=>console.log('error is '+ err))
  }
  async buttonClick(){
      this.props.navigation.navigate('current city',{city:this.state.city})
      await AsyncStorage.setItem('city',this.state.city)
  }
  async listClicked(cityname){
      this.setState({
          city : cityname
      })
  }
  render(){
    renderCities = <Card><List.Item title='no cities' /></Card>
    if(this.state.cities.length > 0){
      renderCities = this.state.cities.map((c) => {
        return (
          <Card key={c.lat}>
            <List.Item title={c.name} onPress={()=>this.listClicked(c.name)} />
          </Card>
        )
      })

    }
    return(
      <View>
        <Header title='select city'/>
        <View style={style.container}>
          <Text style={style.universalFontSize}>Select City</Text>
        </View>
        <View>
          <TextInput
          label='Email'
          value={this.state.city}
          onChangeText={(city)=> this.fetchCity(city)}
          />
        </View>
        <Button style={{margin:20 }} icon="" mode="contained" onPress={() => this.buttonClick()}>
            Save City
        </Button>
        <ScrollView>{renderCities}</ScrollView>
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