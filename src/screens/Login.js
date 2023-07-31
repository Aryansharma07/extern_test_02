import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import  auth  from '@react-native-firebase/auth';
import Scale from '../utils/Scale';
import CustomInput from '../components/customComponents/CustomInput';

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const validation = () => {
    let valid = true;
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if (!strongRegex.test(email)) {
      setEmailError('Please Enter Valid Email');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!(password.length >= 8)) {
      setPasswordError('Please Enter Password greater than 8');
      valid = false;
    } else {
      setPasswordError('');
    }
    return valid;
  };
  
  const handleLogin = async () => {
    if (validation()) {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Logged in user:', user);
        navigation.navigate('Home');
        // Navigate to the desired screen after successful login
      } catch (error) {
        console.log('Login error:', error);
        // Display an error message to the user
      }
    }
  };
  
  

  return (
    <View style={styles.main}>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.textstyle}>Sign In</Text>
      </View>

      <View style={styles.box}>
        <CustomInput
          value={email}
          setValue={setEmail}
          image={password}
          label="Email Address"
          autoComplete="off"
        />
        <Text style={styles.cmError}>{emailError}</Text>

        <CustomInput
          value={password}
          setValue={setPassword}
          image={password}
          label="Password"
          autoComplete="off"
        />
        <Text style={styles.cmError}>{passwordError}</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ width: '50%', alignSelf: 'flex-end',marginRight:20 }}>
          <Text style={styles.register}>Register Here !</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleLogin()} style={styles.login}>
          <Text style={{ alignSelf: 'center', color: 'white' }}>  Login</Text>
        </TouchableOpacity>     
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  cmError: {
    color: 'red',
    fontSize: Scale(8),
    marginLeft: Scale(10)
  },

  textstyle: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 20,
    color: 'black'
  },
  box: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },
  main: {
    flex: 1,
    backgroundColor: '#fff'
  },
  register:{
    alignSelf: 'flex-end', 
    color: '#1a73e8', 
    fontWeight: '400',
     fontSize: 15, 
  },

  login:{
    width: '90%', alignSelf: 'center', marginTop: 20, backgroundColor: '#1A73E8', paddingVertical: 10, borderRadius: 6 
  }
})