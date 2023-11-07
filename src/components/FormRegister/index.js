import React, { useState } from "react";
import { TextInput, SafeAreaView, TouchableOpacity, Text, Alert } from "react-native";
import styles from "./styles";
import { useNavigationContainerRef } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const handleSignIn = () => {
        const data = {
            user,
            email,
            password
        }
        //navigation.('Home')
        if(data) {
          return Alert.alert('O campo está vazio!!!')
        }
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="default"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="default"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

            <Text 
            onPress={() => navigation.navigate('Login')}
            style={styles.link}
            >click here and log in</Text>
        </SafeAreaView>
    )
}