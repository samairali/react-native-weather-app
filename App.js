import React , { Component } from 'React';
import {TextInput , Appbar , Button , AppRegistery} from 'react-native-paper';
import DisplayResult from './components/DisplayResult';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import {Text , View , StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

// var SQLite = require('react-native-sqlite-storage');
var db = openDatabase({name: 'firstsqllite', createFromLocation: '~firstsqllite.db'});
class App extends Component {
  state = {
    firstname: '',
    secondname: '',
    resultfinal : '',
    percentage : '',
    pn : '',
    ownername: ''
  }
  constructor(props){
    super();

    // db.transaction((tx) => {
    //   tx.executeSql('SELECT * FROM PET WHERE owner=?',['jane'],(tx,result) => {
    //     var len = result.rows.length;
    //     if(len > 0){
    //       var row = result.rows.item(0)
    //       // console.log(row.petname)
    //       this.setState({
    //         // pn : row.petname
    //       })
    //     }
    //   });
    // });
}  
  // static navigationOptions = {
  //   title: 'Calculator',
  //   headerStyle: {
  //     backgroundColor: 'indigo',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };

  calculation(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.firstname}&sname=${this.state.secondname}`,
    {headers : {
      "X-RapidAPI-Host":"love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key" : "76a9915c42msh66a85ba3520a3b7p14727ajsn4c9f910761f5"
    }})
    .then(datagetjson=>datagetjson.json())
    .then(dataget=>{
      this.setState({
        resultfinal : dataget
      })
      console.log(dataget)
    })
  }
  render(){
    return(

      <View style={styles.container}>
        {/* <Appbar.Header>
          <Appbar.Content title="Calculator" />
        </Appbar.Header> */}
        <View style={{padding:20}}>
          <Text style={{ fontSize: 50}}>Samair</Text>
          <TextInput
            label = 'First Input'
            value = {this.state.firstname}
            onChangeText = {(firstname) => this.setState({firstname:firstname})}
          />
          <TextInput
            label = 'Second Input'
            value = {this.state.secondname}
            onChangeText = {(secondname) => this.setState({secondname:secondname})}
          />
          <Button 
            icon="mood" 
            mode="contained" 
            onPress={() => this.calculation()}
          >
            Press me
          </Button>
          <DisplayResult result = {this.state.resultfinal} />
          {/* <Text>Your result is {this.state.resultfinal}</Text> */}
          <Button  
            mode='contained'
            onPress={() => this.props.navigation.navigate('About',{
              check:this.state.resultfinal.percentage
            })}
            title=''
          >
            About us
          </Button>
          <Text>{this.state.resultfinal.percentage}</Text>
          <Text style={{fontSize:45}}>Result is : {this.state.pn}</Text>

        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title=""
          mode="contained"
        >
          Go to notifications
        </Button>
      </View>
    )
  }
}
class AboutScreen extends Component{
  render(){
    return(
      <View>
        <Text>This is about us page</Text>
        <Button onPress={()=>this.props.navigation.goBack()}>Go Back to home</Button>
        <Text>{this.props.navigation.getParam('check')}</Text>
      </View>
    )
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: App,
  },
  // Notifications: {
  //   screen: MyNotificationsScreen,
  // },
});
export default createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({
  container : {
    flex: 1,
    fontSize: 50
  },
  result: {
    flex: 2,
    backgroundColor: 'red'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },
  buttons: {
    flexGrow: 1 ,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operators: {
    flex: 1,
    backgroundColor: 'grey'
  }

})