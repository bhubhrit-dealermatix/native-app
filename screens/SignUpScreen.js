import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MainContainer from '../components/MainContainer';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <MainContainer
      title="Sign Up"
      showHeaderLeft={false}
      showHeaderRight={false}
    >
      <>
        <Text style={styles.headingText}>Sign Up with your email</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter email"
            cursorColor={'black'}
            placeholderTextColor={'gray'}
            editable={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter password"
            cursorColor={'black'}
            placeholderTextColor={'gray'}
            editable={true}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.label}>Already have an account ?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.underlinedButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    </MainContainer>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    marginBottom: 10,
    color: '#000',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: '#333',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
  flexRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  underlinedButtonText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '400',
    color: 'blue',
  },
});
