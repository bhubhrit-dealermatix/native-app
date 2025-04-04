import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MainContainer from '../components/MainContainer';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = () => {
        setEmail(email);
    };
    const onChangePassword = () => {
        setPassword(password);
    };

    return (
        <MainContainer
            title="Login"
            showHeaderLeft={false}
            showHeaderRight={false}
            components={
                <View>
                    <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Enter email" />
                    <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Enter password" />
                </View>
            }
        />
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 10,
        color: '#000',
        
    }
})
