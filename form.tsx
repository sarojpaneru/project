import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);

  
  const clear = () => {
    setName(' ');
    setPass(' ');
    setEmail(' ');
    setDisplay(false);
  };
  return (
    <View>
      <Text style={{fontSize: 50}}>Form </Text>
     
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        placeholder="Enter password"
        value={password}
        onChangeText={text => setPass(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color="green"
          title="print details"
          onPress={() => setDisplay(true)}
        />
      </View>

      <Button title="delete" onPress={() => clear()} />
      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>your name is: {name}</Text>
            <Text style={{fontSize: 20}}>your password is: {password}</Text>
            <Text style={{fontSize: 20}}>your email is: {email}</Text>
          </View>
        ) : null}
      </View>
      
    </View>
  );
};




const styles = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: 'black',
  },
});


export default App;
