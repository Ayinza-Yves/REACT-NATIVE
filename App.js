import React,{Component, Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
// import { TextInput } from 'react-native-web';

export default class App extends Component {

  Moninfo(){
    alert('ça marche !');
  }

  render(){
    return (
      <Fragment> 
     
        {/* <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FLionel_Messi&psig=AOvVaw1eoZ-qIwcurtRthDP0LEFH&ust=1719925276205000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCL8ozzhYcDFQAAAAAdAAAAABAR"}} style={{width:100, height:160}}/> */}
         <View style={styles.container}>
              <StatusBar backgroundColor='skyblue' barStyle="dark-content" />
              <Text style={styles.MonText2} >BIENVENUE DANS MON APPLI REACT NATIVE</Text>
              {/* <TextInput style={styles.MonButton} underlineColorAndroid={"red"} maxLength={9} defaultValue="Votre Nom" selectTextOnFocus={true} onBlur={this.yves} ></TextInput> */}
              <Image source={require('./Images/LOGO ETUDIANT.png')} style={{width:150,height:150, marginBottom:20}} /> 
              <Button  onPress={this.Moninfo} title="VALIDER"/>
         </View>

         <View style={styles.container2}> 
           <View style={{backgroundColor:''}}><Text style={{color:'maron', fontSize:12, padding:4, textAlign:'center'}}>By Yves Ayinza</Text></View>
           {/* <View style={{backgroundColor:'green'}}><Text style={{color:'white', fontSize:20, padding:4}}>Je suis bien portant</Text></View>
           <View style={{backgroundColor:'blue'}}><Text style={{color:'white', fontSize:20, padding:4}}>Je suis bien portant</Text></View>
           <View style={{backgroundColor:'red'}}><Text style={{color:'white', fontSize:20, padding:4}}>Je suis bien portant</Text></View> */}

         </View>
       
      </Fragment>
  
    );
  }
  
}




const styles = StyleSheet.create({

  container2:{

    alignItems:'flex-right',
    backgroundColor:'skyblue',
  
  },

  container: {
    
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
 
  MonText2:{
  
    color:'ywheat',
    fontSize:25,
    textAlign:'center',
    padding:9,
    fontWeight:'bold',

  },

});
