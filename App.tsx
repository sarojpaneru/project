import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  

  return (
    <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
      
      <First />
      <Second />
      <Third/>
    </View>

  );
};

const First = ()=>{
  return(
<View style={styles.color}>
  <Text>Otp</Text>
</View>
  )

}

const Second = ()=>{
  return(
<View style={styles.color}>
  <Text>Otp</Text>
</View>
  )

}

const Third = ()=>{
  return(
<View style={styles.color}>
  <Text>Otp</Text>
</View>
  )

}
 
const styles= StyleSheet.create({
 color:{
  height:200,
  width:400,
  backgroundColor:"red",
  margin:1,
  marginBottom:1,
 }

})




export default App;
