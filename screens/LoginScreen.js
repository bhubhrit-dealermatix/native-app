import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MainContainer from '../components/MainContainer';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <MainContainer
            title="Login"
            showHeaderLeft={false}
            showHeaderRight={false}
            headerFloatingView={[
                {
                    tabName: 'tab1',
                    components: () => {},
                },
                {
                    tabName: 'tab2',
                    components: () => {
                        <View>
                            <Text>12333333</Text>
                        </View>
                    },
                },
            ]}
        >
            <>
                <Text style={styles.headingText}>Login with your email</Text>
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
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.label}>Do not have an account ?</Text>
                    <TouchableOpacity onPress={goToSignUp}>
                        <Text style={styles.underlinedButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </>
        </MainContainer>
    );
};

export default LoginScreen;

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
