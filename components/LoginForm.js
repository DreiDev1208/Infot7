import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //Login logic
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');

    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Icon name="user-circle" size={80} color="#f71d31" style={styles.logo} />
      <Text style={styles.waralang}>GROUP ANDREI, NICK & EUGENE</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#f71d31"
        />
        <View style={styles.underline} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="#f71d31"
        />
        <View style={styles.underline} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    marginBottom: 15,
  },
  waralang: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 25,
    color: '#f71d31'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 16,
    color: '#f71d31',
    borderBottomWidth: 1,
    borderBottomColor: '#f71d31',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
    backgroundColor: '#f71d31',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#f71d31',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginForm;
