import React, { useState } from "react";
import { TextInput, SafeAreaView, TouchableOpacity, Text, Alert } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Form() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const handleSignIn = () => {
        const data = {
            user, password
        }
        //navigation.('Home')
        if(data) {
          return Alert.alert('O campo está vazio!!!')
        }
        navigation.navigate('Principal')
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
            onPress={() => navigation.navigate('Register')}
            style={styles.link}
            >click here and log in</Text>
        </SafeAreaView>
    )
}