import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Scale from '../utils/Scale';
import { firebase } from '@react-native-firebase/auth/lib';
import CustomInput from '../components/customComponents/CustomInput';
// import auth from '@react-native-firebase/auth'

const Register = () => {
  const navigation = useNavigation()
  const auth = firebase.auth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleSignup = async () => {
    const isValid = validateFields();
    if (isValid) {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Signed up user:', user);
        // Navigate to the desired screen after successful signup
        if(user){
        navigation.navigate('Login')
        }
      } catch (error) {
        console.log('Signup error:', error);
        // Display an error message to the user
      }
    }
  };
  

  const validateFields = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Please enter First Name';
    }

    if (!lastName) {
      errors.lastName = 'Please enter Last Name';
    }

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid Email Address';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <View style={styles.main}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.textstyle}>Register Here</Text>
      </View>

      <View style={styles.box}>
        <CustomInput
          value={firstName}
          setValue={setFirstName}
          label="First Name"
          autoComplete="off"
        />
        {validationErrors.firstName && <Text style={styles.cmError}>{validationErrors.firstName}</Text>}

        <CustomInput
          value={lastName}
          setValue={setLastName}
          label="Last Name"
          autoComplete="off"
        />
        {validationErrors.lastName && <Text style={styles.cmError}>{validationErrors.lastName}</Text>}

        <CustomInput
          value={email}
          setValue={setEmail}
          label="Email Address"
          autoComplete="off"
        />
        {validationErrors.email && <Text style={styles.cmError}>{validationErrors.email}</Text>}

        <CustomInput
          value={password}
          setValue={setPassword}
          image={password}
          label="Password"
          autoComplete="off"
        />
        {validationErrors.password && <Text style={styles.cmError}>{validationErrors.password}</Text>}

        <CustomInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          label="Confirm Password"
          autoComplete="off"
        />
        {validationErrors.confirmPassword && <Text style={styles.cmError}>{validationErrors.confirmPassword}</Text>}

        <TouchableOpacity onPress={handleSignup} style={styles.register}>
          <Text style={{ alignSelf: 'center', color: 'white' }}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

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
  register: {
    alignSelf: 'flex-end',
    color: '#1a73e8',
    fontWeight: '400',
    fontSize: 15,
  },

  register: {
    width: '90%', alignSelf: 'center', marginTop: 20, backgroundColor: '#1A73E8', paddingVertical: 10, borderRadius: 6
  }
})