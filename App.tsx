
import React from 'react';
import {
  Button,
  Text,
  View,
 
} from 'react-native';
import Cuserdata from './components/Cuserdata'



  const App = () =>{
    let data=100;
    const name =(are)=>{
      data=20;
      console.warn(data)
    }
  return (
    <View>
      <Cuserdata />
      <Text style={{fontSize:30}}>{data}</Text>
      <Text style={{fontSize:30}}>I hope you are fine</Text>
      <Text style={{fontSize:25}}>separate buttons</Text>
      <Button title='on Press2' onPress={() =>name("hello saroj")} color={'black'} ></Button>
      </View>
  );
  };
  
export default App;
